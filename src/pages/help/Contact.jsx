import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData();

    return (
        <div className="contact">
            <Form method="post" action="/about/contact">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </Form>
            {data && <p>Mail: {data.email}<br/>Message: {data.message}</p>}
        </div>
    );
}
 
export const contactForm = async ({request}) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    return redirect('/');
}

export default Contact;