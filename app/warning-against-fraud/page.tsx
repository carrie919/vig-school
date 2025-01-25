"use client";

import * as React from "react";

export default function WarningAgainstFraud() {
  return (
    <section id="warning-against-fraud" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            WARNING AGAINST FRAUD
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>

        <div className="text-gray-600 leading-relaxed">
          <p className="mb-4">25 May 2021</p>
          <p className="mb-4">Dear Parents,</p>
          <p className="mb-4">Greetings from Little Rock!</p>
          <p className="mb-4">
            We have come to know that a fake message is going round in the name of Little Rock Indian School, via SMS/WhatsApp. The message says they will give a loan to pay our School Fees, repayable in easy EMIs.
          </p>
          <p className="mb-4">
            This is to inform you that this message is not from us. Please do not believe these hoax messages. We will communicate with you through our website and via WhatsApp.
          </p>
          <p className="mb-4">Thank you</p>
          <p className="mb-4">Thank you very much.</p>
          <p className="mb-4">Dr. John Thomas</p>
          <p className="mb-4">Principal</p>
        </div>
      </div>
    </section>
  );
}
