import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItem {
    id: string
    question: string
    answer: string
}

interface AccordionProps {
    items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openItem, setOpenItem] = useState<string | null>(null)

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id)
    }

    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg">
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">{item.question}</h3>
                        <ChevronDownIcon
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openItem === item.id ? 'transform rotate-180' : ''
                                }`}
                        />
                    </button>
                    <AnimatePresence>
                        {openItem === item.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4 pt-2">
                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

export default Accordion
