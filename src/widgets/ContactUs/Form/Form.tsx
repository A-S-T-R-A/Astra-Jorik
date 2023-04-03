import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FormUi } from "./components/FormUi/FormUi"
import { FormLoading } from "./components/FormLoading/FormLoading"
import styles from "./Form.module.css"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { Section } from "shared/ui/Section/Section"
import { ContactsSection } from "./components/ContactsSection/ContactsSection"
import { classNames } from "shared/lib/classNames"

interface FormProps {
    className?: string
}

export default function Form({ className }: FormProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [showForm, setShowForm] = useState(true)
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const formRef = useRef()

    function sendEmail() {
        setLoading(true)
        setShowForm(false)
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_USER_ID
            )
            .then(
                result => {
                    setIsSuccess(true)
                    setName("")
                    setEmail("")
                    setNameError(false)
                    setEmailError(false)
                },
                error => {
                    error && console.log(error.text)
                }
            )
            .finally(() => {
                setLoading(false)
            })
    }

    function handleNameChange(e) {
        e.preventDefault()
        setName(e.target.value)
        setNameError(false)
    }

    function handleEmailChange(e) {
        e.preventDefault()
        setEmail(e.target.value)
        setEmailError(false)
    }

    function submitHandler(e) {
        e.preventDefault()

        const nameRegEx = /^[a-zа-яё\s]+$/iu
        const emailRegEx =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!nameRegEx.test(name)) {
            setNameError(true)
            return
        }
        if (!emailRegEx.test(email)) {
            setEmailError(true)
            return
        }

        sendEmail()
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {showForm ? (
                <FormUi
                    submitHandler={submitHandler}
                    handleNameChange={handleNameChange}
                    handleEmailChange={handleEmailChange}
                    handleMessageChange={e => setMessage(e.target.value)}
                    nameError={nameError}
                    emailError={emailError}
                    name={name}
                    email={email}
                    message={message}
                    onClick={submitHandler}
                    formRef={formRef}
                />
            ) : (
                <FormLoading loading={loading} isSuccess={isSuccess} />
            )}
        </div>
    )
}
