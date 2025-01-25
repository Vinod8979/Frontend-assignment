import React from 'react';
import './App.css';
import logo from '../src/assests/logo.png';
import { FiBell } from "react-icons/fi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { PieChart, Pie, Cell, Label } from 'recharts';
import { TbBoxOff } from "react-icons/tb";


const COLORS = ['#E0E0E0', '#8E44AD', '#2C3E50', '#D2B4DE'];

const App = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const pieData = [
    { name: 'Signed', value: 30000 },
    { name: 'Pending', value: 30000 },
    { name: 'Expired', value: 30000 },
    { name: 'Initiated', value: 30000 },
  ];

  const signStatusColors = [
    { label: 'Initiated', color: '#ede9fe' },
    { label: 'Pending', color: '#c084fc' },
    { label: 'Signed', color: '#4b0082' },
    { label: 'Expired', color: '#ddd6fe' },
  ];
  
  return (
    <>
      <div className='container'>
        <img src={logo} alt='logo' className='logo' />
        <ul>
          <li>
            <select>
              <option value="User" selected>Services</option>
            </select>
          </li>
          <li>User Management</li>
          <li>My Orders</li>
          <li>Reports</li>
          <li>Stamp Inventory</li>
          <li>Bar Codes</li>
          <li>Invoice</li>
          <li><button>Coming Soon</button></li>
          <li><FiBell color='purple' /></li>
          <li><div className="profile-selector">
            <div className="profile-name">Michael Smith</div>
            <div className="profile-icon">M</div>
            </div>
          </li>
        </ul>
      </div>
      <div className='column'>
        <div className='left-column'>
          <div className='greet'>
            <h4>👋🏼 Welcome, User</h4>
            <h6>{dateString}</h6>
          </div>
          <div className='wallet'>
            <p className='wallet-text' style={{ fontSize: '13px', marginTop: '10px' }}>My Wallet</p>
            <MdAccountBalanceWallet className='wallet-icon' color='purple' size={22} />
            <h3 className='wallet-amount'>₹2,50,000</h3>
            <h6 className='wallet-text2'>Current Balance</h6>
            <p style={{ fontSize: '12px', marginTop: '10px' }}>Running low? <a href="#" style={{ color: 'purple', fontSize: '12px' }}>Notify admin</a> now.</p>
          </div>
          <div className='actions'>
            <h4>Pending Actions</h4>
            <div className='actions1'>
              <h3>#trd35468</h3>
              <h6>2 files are waiting to be uploaded</h6>
            </div>
            <div className='actions2'>
              <h3>#33255577</h3>
              <h6>2 files are waiting to be uploaded</h6>
            </div>
            <div className='actions3'>
              <h3>#76298347</h3>
              <h6>2 files are waiting to be uploaded</h6>
            </div>
            <div className='actions4'>
              <h3>#65873428</h3>
              <h6>2 files are waiting to be uploaded</h6>
            </div>
          </div>
        </div>
        <div className='right-column'>
          <div className='right-column-header'>
            <h2>Frequently Used</h2>
            <div className='section-container' style={{ display: 'flex', gap: '20px' }}>
              <div className='section1'>
                <h3>Contract Execution Upload</h3>
                <p style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Senectus sed urna ac tempus ornare.</p>
<p><a href="#" style={{ color: 'purple', marginTop: '20px', display: 'block' }}>Get Started&gt;&gt;</a></p>
              </div>
              <div className='section2'>
                <h3>E-Stamp Services</h3>
                <p style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Senectus sed urna ac tempus ornare.</p>
                <p><a href="#" style={{ color: 'purple', marginTop: '20px', display: 'block' }}>Get Started&gt;&gt;</a></p>
                </div>
              <div className='section3'>
                <h3>E-Sign Services</h3>
                <p style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Senectus sed urna ac tempus ornare.</p>
                <p><a href="#" style={{ color: 'purple', marginTop: '20px', display: 'block' }}>Get Started&gt;&gt;</a></p>
                </div>
            </div>
          </div>
          <div className='dropdown'>
            <div className='dropdown1'>
              <select>
                <option value="All Branches" selected>All Branches</option>
              </select>
            </div>
            <div className='dropdown2'>
              <select>
                <option value="Custom Range" selected>Custom Range</option>
              </select>
            </div>
            <select>
              <option value="date" selected>March 2020<MdDateRange /></option>
            </select>
          </div>
          <div className='orders'>
            <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', marginTop: '10px' }}>Order Details</span>
              <a href="#" style={{ color: 'purple', fontSize: '12px' }}>View All</a>
            </h1>
            <div className='Total-Orders'>
              <p className='orders-num'>18</p>
              <FaDropbox className='order-icon' color='purple' />
              <p className='order-text'>Total Orders</p>
              <FaArrowTrendUp color='green' />
              <p className='orders-num'>+2.4%</p>
            </div>
            <div className='In-Progress'>
              <p className='orders-num'>10</p>
              <FaClock className='order-icon' color='purple' />
              <p className='order-text'>In Progress</p>
              <FaArrowTrendUp color='green' />
              <p className='orders-num'>+2.4%</p>
            </div>
            <div className='Completed-Orders'>
              <p className='orders-num'>5</p>
              <GiCardboardBoxClosed className='order-icon' color='purple' size={19} />
              <p className='order-text'>Completed Orders</p>
              <FaArrowTrendUp color='green' />
              <p className='orders-num'>+2.4%</p>
            </div>
            <div className='Cancelled-Orders'>
              <p className='orders-num'>3</p>
              <TbBoxOff className='order-icon' color='purple' size={19} />
              <p className='order-text'>Cancelled Orders</p>
              <FaArrowTrendDown color='red' />
              <p className='orders-num'>+2.4%</p>
            </div>
          </div>

          <div className="charts-section">
            <div className="card-box">
              <h3 className="card-title underline" style={{ fontSize: '13px', marginTop: '10px' }}>E-sign Count</h3>
              <div className="chart-content">
                <div className="pie-chart-container">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={pieData}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label value="30K Initiated" position="center" style={{ fontWeight: 'bold', fill: 'black' }} />                    </Pie>
                  </PieChart>
                </div>
                <div className="legend">
                  <div className="legend-row">
                  {signStatusColors.slice(0, 2).map((status, index) => (
                      <div key={index} className="legend-item">
                        <div className="color-box" style={{ backgroundColor: status.color }} />
                        <span className="legend-label">{status.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="legend-row">
                    {signStatusColors.slice(2).map((status, index) => (
                      <div key={index} className="legend-item">
                        <div className="color-box" style={{ backgroundColor: status.color }} />
                        <span className="legend-label">{status.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-box">
              <h3 className="card-title underline" style={{ fontSize: '13px', marginTop: '10px' }}>E-stamp Count</h3>
              <div className="chart-content">
                <div className="pie-chart-container">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={pieData}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label value="30K Initiated" position="center" style={{ fontWeight: 'bold', fill: 'black' }} />                    </Pie>
                  </PieChart>
                </div>
                <div className="legend">
                  <div className="legend-row">
                    {signStatusColors.slice(0, 2).map((status, index) => (
                      <div key={index} className="legend-item">
                        <div className="color-box" style={{ backgroundColor: status.color }} />
                        <span className="legend-label">{status.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="legend-row">
                    {signStatusColors.slice(2).map((status, index) => (
                      <div key={index} className="legend-item">
                        <div className="color-box" style={{ backgroundColor: status.color }} />
                        <span className="legend-label">{status.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='social-icons' style={{ display: 'flex', gap: '10px' }}>
          <CiFacebook className='footer-logo'/>
          <TiSocialTwitterCircular className='footer-logo'/>
          <TiSocialLinkedinCircular className='footer-logo'/>
        </div>
        <p className='footer-text'>© 2023 All Rights Reserved</p>
      </div>
    </>
  );
}

export default App;
