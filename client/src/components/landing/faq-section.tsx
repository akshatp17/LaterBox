import React from 'react'
import Accordion from './accordion'

const FAQSection = () => {
    const faqItems = [
        {
            id: '1',
            question: 'What is LaterBox?',
            answer: 'LaterBox is a simple task management tool designed to boost your productivity.'
        },
        {
            id: '2',
            question: 'How does the free plan work?',
            answer: 'The free plan allows you to manage up to 5 tasks with basic features including simple reminders, email notifications, and basic analytics.'
        },
        {
            id: '3',
            question: 'Can I upgrade my plan later?',
            answer: 'Yes, you can upgrade to the Pro plan at any time for additional features like unlimited tasks, advanced organization, and priority support.'
        },
        {
            id: '4',
            question: 'Is there a mobile app available?',
            answer: 'Currently, LaterBox is available as a web application that works seamlessly on all devices including mobile browsers.'
        },
        {
            id: '5',
            question: 'How secure is my data?',
            answer: 'Your data is always protected with industry-standard encryption. We prioritize privacy and never share your personal information.'
        },
        {
            id: '6',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, PayPal, and other secure payment methods for the one-time Pro plan purchase.'
        }
    ]

    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto px-4">
                <Accordion items={faqItems} />
            </div>
        </>
    )
}

export default FAQSection
