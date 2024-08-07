"use client";

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaBox, FaDollarSign, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar'; // Importing the Navbar component

const Dashboard: React.FC = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1900, 3000, 5000, 2300, 3400],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Transactions',
        data: [150, 200, 1800, 220, 2500, 270, 300],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="flex flex-col items-center p-4">
        <motion.div
          className="w-full max-w-6xl p-8 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <motion.div
              className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaBox className="text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Latest Orders</h2>
                <p className="mt-1 text-gray-200">No orders yet</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaDollarSign className="text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Total Revenue</h2>
                <p className="mt-1 text-gray-200">Your total revenue across all payment gateways crossed $2367</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-purple-500 text-white p-6 rounded-lg shadow-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaChartLine className="text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Average Daily Transactions</h2>
                <p className="mt-1 text-gray-200">Your average daily transactions across all payment gateways crossed 190+</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue Over Time</h2>
              <Bar data={barData} />
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Transactions</h2>
              <Line data={lineData} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
