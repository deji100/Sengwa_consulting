"use client";

import React, { useState } from 'react';
import '../form.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const FloatingJobForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        customerType: '',
        firstName: '',
        middleName: '',
        lastName: '',
        is18Plus: '',
        dob: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        availableFrom: '',
        linkedin: '',
        experienceYears: '',
        employmentType: '',
        w2Or1099: '',
        preferredJobs: '',
        hourlyWage: '',
        annualSalary: '',
        acceptLowerOffer: '',
        educationLevel: '',
        otherEducation: '',
        educationStart: '',
        educationEnd: '',
        languages: '',
        certifications: '',
        authorizedInUSA: '',
        requireSponsorship: '',
        willingToTravel: '',
        travelPercentage: '',
        travelInternationally: '',
        willingToWorkAnywhereUSA: '',
        preferredStateIfNotAnywhere: '',
        willingToWorkRemoteAnywhereUSA: '',
        professionalReferences: '',
        hasDriversLicense: '',
        covidVaccineStatus: '',
        willingToWorkWeekends: '',
        convictedOfCrime: '',
        convictionExplanation: '',
        gender: '',
        hispanicOrLatino: '',
        race: '',
        veteranStatus: '',
        hasDisability: '',
        messageToSpecialist: '',
        companiesNotToApplyTo: '',
        whatsappNumber: '',
        referralSource: '',
        time: new Date().toLocaleString(),
        mathVerification: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.mathVerification.trim() !== '7') {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Math verification failed. Please answer correctly.',
                confirmButtonColor: '#3085d6',
            });
            return;
        }

        const serviceID = `${process.env.NEXT_PUBLIC_SERVICE_ID}`
        const templateID = "template_8ktgog6"
        const userID = `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your application has been sent successfully!',
                    confirmButtonColor: '#28a745',
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push('/');
                    }
                });

                setFormData({
                    email: '',
                    customerType: '',
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    is18Plus: '',
                    dob: '',
                    phone: '',
                    address: '',
                    city: '',
                    state: '',
                    zip: '',
                    availableFrom: '',
                    linkedin: '',
                    experienceYears: '',
                    employmentType: '',
                    w2Or1099: '',
                    preferredJobs: '',
                    hourlyWage: '',
                    annualSalary: '',
                    acceptLowerOffer: '',
                    educationLevel: '',
                    otherEducation: '',
                    educationStart: '',
                    educationEnd: '',
                    languages: '',
                    certifications: '',
                    authorizedInUSA: '',
                    requireSponsorship: '',
                    willingToTravel: '',
                    travelPercentage: '',
                    travelInternationally: '',
                    willingToWorkAnywhereUSA: '',
                    preferredStateIfNotAnywhere: '',
                    willingToWorkRemoteAnywhereUSA: '',
                    professionalReferences: '',
                    hasDriversLicense: '',
                    covidVaccineStatus: '',
                    willingToWorkWeekends: '',
                    convictedOfCrime: '',
                    convictionExplanation: '',
                    gender: '',
                    hispanicOrLatino: '',
                    race: '',
                    veteranStatus: '',
                    hasDisability: '',
                    messageToSpecialist: '',
                    companiesNotToApplyTo: '',
                    whatsappNumber: '',
                    referralSource: '',
                    time: "",
                    mathVerification: '',
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'There was an error sending your message.',
                    confirmButtonColor: '#3085d6',
                });
            });
    };

    return (
        <form className="floating-form" onSubmit={handleSubmit}>
            <h1>Job Application Form</h1>

            <div>
                <label>Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
                <label>Are you a new or a returning customer?*</label>
                <select name="customerType" value={formData.customerType} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="New">New Customer</option>
                    <option value="Returning">Returning Customer</option>
                </select>
            </div>

            <div>
                <label>Name*</label>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />

                <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />

                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div>
                <label>Are you at least 18 years of age?*</label>
                <select name="is18Plus" value={formData.is18Plus} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div>
                <label>Date of Birth*</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>

            <div>
                <label>Phone*</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div>
                <label>Address*</label>
                <input type="text" name="address" placeholder='Address' value={formData.address} onChange={handleChange} required />

                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />

                <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />

                <input type="text" name="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} required />
            </div>

            <div>
                <label>Available to work from*</label>
                <input type="date" name="availableFrom" value={formData.availableFrom} onChange={handleChange} required />
            </div>

            <div>
                <label>Your LinkedIn URL*</label>
                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} required />
            </div>

            <div>
                <label>Years of Experience*</label>
                <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} required />
            </div>

            <div>
                <label>Type of Employment Desired*</label>
                <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label>Do you want us to apply for W2 or 1099 (Contract) jobs *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="w2Or1099" value="W-2" onChange={handleChange} />
                        <span style={{ whiteSpace: 'nowrap' }}>W-2</span>
                    </label>
                    <label>
                        <input type="radio" name="w2Or1099" value="1099" onChange={handleChange} />
                        <span>1099</span>
                    </label>
                    <label>
                        <input type="radio" name="w2Or1099" value="Both" onChange={handleChange} />
                        <span>Both</span>
                    </label>
                </div>
            </div>

            <div>
                <label>List your preferred job positions *</label>
                <input name="preferredJobs" value={formData.preferredJobs} onChange={handleChange} />
            </div>

            <div>
                <label>Hourly wage expectation *</label>
                <input name="hourlyWage" value={formData.hourlyWage} onChange={handleChange} />
            </div>

            <div>
                <label>Annual salary expectation *</label>
                <input name="annualSalary" value={formData.annualSalary} onChange={handleChange} />
            </div>

            <div>
                <label>If a company is offering less than your salary expectation, can we apply for them? e.g your salary expectation is $100k but the company is offering $65k-$85k, can we apply for that job with the maximum value they are willing to offer?
                    *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="acceptLowerOffer" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="acceptLowerOffer" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Highest Education level achieved *</label>
                <select name="educationLevel" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Associates">Associates</option>
                    <option value="Bachelor's">{"Bachelor's"}</option>
                    <option value="Masters">Masters</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label>If Other, specify *</label>
                <input name="otherEducation" value={formData.otherEducation} onChange={handleChange} />
            </div>

            <div>
                <label>Education Start Date (MM/YYYY) *</label>
                <input type='date' name="educationStart" value={formData.educationStart} onChange={handleChange} />
            </div>

            <div>
                <label>Education End Date (MM/YYYY) *</label>
                <input type='date' name="educationEnd" value={formData.educationEnd} onChange={handleChange} />
            </div>

            <div>
                <label>Languages known *</label>
                <input name="languages" value={formData.languages} onChange={handleChange} />
            </div>

            <div>
                <label>Certification(s)</label>
                <input name="certifications" value={formData.certifications} onChange={handleChange} />
            </div>

            <div>
                <label>Are you legally authorized to work in the USA? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="authorizedInUSA" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="authorizedInUSA" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Will you require sponsorship in the future? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="requireSponsorship" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="requireSponsorship" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Are you willing to travel? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="willingToTravel" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="willingToTravel" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>What percentage of travel (e.g. 25%) *</label>
                <input type="text" name="travelPercentage" value={formData.travelPercentage} onChange={handleChange} />
            </div>

            <div>
                <label>Are you willing to travel internationally? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="travelInternationally" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="travelInternationally" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Are you willing to work anywhere within the USA? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="willingToWorkAnywhereUSA" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="willingToWorkAnywhereUSA" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>If {'"No"'} specify what state you want to work in. *</label>
                <input type="text" name="preferredStateIfNotAnywhere" value={formData.preferredStateIfNotAnywhere} onChange={handleChange} />
            </div>

            <div>
                <label>For a REMOTE job, are you willing to work anywhere within the USA? *</label>
                <input type="text" name="willingToWorkRemoteAnywhereUSA" value={formData.willingToWorkRemoteAnywhereUSA} onChange={handleChange} />
            </div>

            <div>
                <label>Professional References (3) (Can be someone from your past job or University Professor) *</label>
                <textarea name="professionalReferences" value={formData.professionalReferences} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Do you have a valid {"Driver's"} License? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="hasDriversLicense" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="hasDriversLicense" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Please tell us about your COVID-19 Vaccine status *</label>
                <select name="covidVaccineStatus" value={formData.covidVaccineStatus} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Vaccinated">Vaccinated</option>
                    <option value="Not Vaccinated">Not Vaccinated</option>
                    <option value="I do not wish to disclose">I do not wish to disclose</option>
                </select>
            </div>

            <div>
                <label>Are you willing to work on weekends? (If required) *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="willingToWorkWeekends" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="willingToWorkWeekends" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Have you ever been convicted of criminal offense(s)? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="convictedOfCrime" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="convictedOfCrime" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>If Yes, please explain.</label>
                <textarea name="convictionExplanation" value={formData.convictionExplanation} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Gender *</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>
            </div>

            <div>
                <label>Are you Hispanic/Latino? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="hispanicOrLatino" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="hispanicOrLatino" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Race *</label>
                <input type="text" name="race" value={formData.race} onChange={handleChange} />
            </div>

            <div>
                <label>Are you a veteran? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="veteranStatus" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="veteranStatus" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Do you have a disability? *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="hasDisability" value="Yes" onChange={handleChange} />
                        <span>Yes</span>
                    </label>
                    <label>
                        <input type="radio" name="hasDisability" value="No" onChange={handleChange} />
                        <span>No</span>
                    </label>
                </div>
            </div>

            <div>
                <label>Your message to your Job Hunt Specialist at Sengwa Consulting *</label>
                <textarea name="messageToSpecialist" value={formData.messageToSpecialist} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Are there any companies you DO NOT want us to apply to? *</label>
                <textarea name="companiesNotToApplyTo" value={formData.companiesNotToApplyTo} onChange={handleChange}></textarea>
            </div>

            <div>
                <label>Please provide your WhatsApp phone number for customer support *</label>
                <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} />
            </div>

            <div>
                <label>How did you hear about Sengwamina? If your friend referred you, please mention their name. *</label>
                <input type="text" name="referralSource" value={formData.referralSource} onChange={handleChange} />
            </div>

            <div>
                <label>What is thirteen minus 6? *</label>
                <input type="text" name="mathVerification" value={formData.mathVerification} onChange={handleChange} />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default FloatingJobForm