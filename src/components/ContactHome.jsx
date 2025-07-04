"use client";

import "@/styles/ContactHome.css";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ContactHome() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mail: '',
        method: '',
        phone: '',
        address: '',
        zipcode: '',
        message: ''
    })
    const [isContactSection, setIsContactSection] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/contact') {
            setIsContactSection(true);
        } else {
            setIsContactSection(false);
        }
    }, [])

    const resizingTextArea = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    }

    return(
        <section className={`contacthome ${isContactSection ? 'inverted' : ''}`}>
            <div className="contacthome-container">
                <div className="contacthome-text">
                    <div className={`contacthome-title ${isContactSection ? 'inverted' : ''}`}>
                        <h2>Contact <b>Us</b></h2>
                        <p className="section-paragraph">We proudly serve all residential neighborhoods within a 30-mile radius of Portland, Oregon, Salem, Oregon, and Vancouver, Washington, offering same-day mobile locksmith services.</p>
                    </div>
                    <div className={`contacthome-info ${isContactSection ? 'inverted' : ''}`}>
                        <a href="#"><img src="/svgs/clock.svg" alt="Clock" />Monday - Saturday: 08AM to 10PM</a>
                        <a href="mailto:agdkservices@gmail.com"><img src="/svgs/sms.svg" alt="Mail" />agdkservices@gmail.com</a>
                        <a href="#"><img src="/svgs/location.svg" alt="Location" />NW Arizona Dr, Hillsboro, OR 97006, EE. UU.</a>
                        <a href="tel:+1234567890"><img src="/svgs/call.svg" alt="Phone" />+1 (234) 567-890</a>
                    </div>
                </div>
                <form action="submit" onSubmit={handleSubmit} className={`contacthome-form ${isContactSection ? 'inverted' : ''}`}>
                    <div className={`form-row ${isContactSection ? 'inverted' : ''}`}>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="firstname">First Name*</label>
                            <input type="text" id="firstname" name="firstname" placeholder="Your First Name" required onChange={handleChange} value={formData.firstname} />
                        </div>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="lastname">Last Name*</label>
                            <input type="text" id="lastname" name="lastname" placeholder="Your Last Name" required onChange={handleChange} value={formData.lastname}/>
                        </div>
                    </div>
                    <div className={`form-row ${isContactSection ? 'inverted' : ''}`}>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="mail">Email*</label>
                            <input type="email" id="mail" name="mail" placeholder="example@mail.com" required onChange={handleChange} value={formData.mail}/>
                        </div>
                    </div>
                    <div className={`form-row ${isContactSection ? 'inverted' : ''}`}>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="method">Preferable contact method*</label>
                            <select id="method" name="method" required onChange={handleChange} value={formData.method}>
                                <option value="" disabled={true} defaultValue={""}>Select...</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>
                    </div>
                    <div className={`form-row ${isContactSection ? 'inverted' : ''}`}>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="phone">Phone*</label>
                            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required onChange={handleChange} value={formData.phone}/>
                        </div>
                    </div>
                    <div className={`form-row ${isContactSection ? 'inverted' : ''}`}>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="address">Address*</label>
                            <input type="text" id="address" name="address" placeholder="Your Address" required onChange={handleChange} value={formData.address}/>
                        </div>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="zipcode">Zip Code*</label>
                            <input type="text" id="zipcode" name="zipcode" placeholder="Your Zip Code" required onChange={handleChange} value={formData.zipcode}/>
                        </div>
                    </div>
                    <div className={`form-row ${isContactSection ? 'inverted' : ''}`}>
                        <div className={`form-group ${isContactSection ? 'inverted' : ''}`}>
                            <label htmlFor="message">Message*</label>
                            <textarea id="message" name="message" placeholder="Your Message" required onChange={handleChange} value={formData.message}></textarea>
                        </div>
                    </div>
                    <button type="submit" className={`btn-global ${isContactSection ? 'btn-primary300' : 'btn-terciary'}`}>Send Message</button>
                </form>
            </div>
        </section>
    )
}