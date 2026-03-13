import React from "react";

const LandingPageData = {
  header: {
    title: "Finance Guru",
    subtitle: "Manage your finances with ease and confidence.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9mS2n02VY1hf0Wrs7BAbeD_FFX0ARZGrNxA&s"
  },

  hero: {
    title: "Take Control of Your Money",
    description:
      "Track expenses, manage budgets, and grow your savings all in one place.",
    buttonText: "Get Started",
    image:
      "https://www.theladders.com/wp-content/uploads/money_190506.jpg"
  },

  features: [
    {
      id: 1,
      title: "Expense Tracking",
      description: "Monitor where your money goes every day.",
      icon: <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
    },
    {
      id: 2,
      title: "Smart Budgeting",
      description: "Create budgets and stay on track with spending.",
      icon: <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <circle cx={6} cy={6} r={3} />
            <circle cx={6} cy={18} r={3} />
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
          </svg>
    },
    {
      id: 3,
      title: "Financial Insights",
      description: "Get detailed reports and insights into your finances.",
      icon: <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
    }
  ],

  testimonials: [
    {
      id: 1,
      img: "https://www.thearabtoday.com/wp-content/uploads/2025/11/Mudassir-Sheikha-The-Visionary-Entrepreneur-Behind-Careem.png",
      name: "Mudassir Sheikha",
      feedback:
        "FinanceGuru helped me save more money in 3 months than I did all year!",
      role: "Co-founder and CEO of Careem"
    },
    {
      id: 2,
      img: "https://media.licdn.com/dms/image/v2/D5603AQEjmhLoHMXa0g/profile-displayphoto-scale_400_400/B56ZyliDynIwAk-/0/1772303708247?e=2147483647&v=beta&t=dFMDNETikbNPeub1DUs8e6XaGauEUymnv4yG4gpA5GQ",
      name: "Ahmed Abubakar",
      feedback:
        "A simple and powerful way to manage personal finances.",
      role: "primary founder and CEO of Vyro AI"
    }
  ],
};

export default LandingPageData;