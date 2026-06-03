import { useState } from "react";

function Home() {
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, SetFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        SetFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            validationErrors.email = "Invalid email format";
        }

        if (!formData.message.trim()) {
            validationErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            validationErrors.message =
                "Message must be at least 10 characters";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        try {
            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            console.log(data);

            setSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1>She Can Foundation</h1>

            <p
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "#666",
                }}
            >
                We'd love to hear from you.
            </p>

            {submitted ? (
                <h2>Form Submitted Successfully</h2>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {errors.name && (
                        <p className="error">{errors.name}</p>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    {errors.email && (
                        <p className="error">{errors.email}</p>
                    )}

                    <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    {errors.message && (
                        <p className="error">{errors.message}</p>
                    )}

                    <button type="submit">
                        Submit
                    </button>
                </form>
            )}
        </div>
    )
}

export default Home;