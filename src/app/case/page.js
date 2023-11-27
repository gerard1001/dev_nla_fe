"use client"
import React, { useState } from 'react';
import All from './All';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Cases');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>


      <div className="grid grid-cols-3 ml-[-10px]">
        <div>
          <h1 className="font-bold text-2xl">Dispute Cases</h1>
        </div>

        <div className=" ml-[-160px] w-full  border-gray-200  mt-[-10px]">
          <ul className="flex   text-sm font-medium text-center">
            {['Cases', 'Timeline', 'Upload_Documents', 'Progress_Tracking', 'Communication', 'More'].map((tabId) => (
              <TabButton
                key={tabId}

                tabId={tabId}
                label={tabId.charAt(0).toUpperCase() + tabId.slice(1)}
                isActive={activeTab === tabId}
                onClick={handleTabClick}
              />
            ))}
          </ul>
        </div>
        <div className='ml-auto '>
          <ul className='flex'>
            <li><img style={{ borderRadius: 10 }} src='https://switchiify.net.rw/u/assets/img/profile.png' className='h-[25px] w-[25px] rounded-fill' />
            </li>
            <li className='ml-[-5px]'><img style={{ borderRadius: 10 }} src='https://switchiify.net.rw/u/classes/profile/1689844895_1img_20230720_082441_454.jpg' className='h-[25px] w-[25px] rounded-fill' />
            </li>
            <li className='ml-[-5px]'><img style={{ borderRadius: 10 }} src='https://switchiify.net.rw/u/classes/profile/smile.jpg' className='h-[25px] w-[25px] rounded-fill' />
            </li>
            <li className='ml-[-5px]'><img style={{ borderRadius: 10 }} src='https://switchiify.net.rw/u/classes/profile/IMG-20221222-WA0014.jpeg' className='h-[25px] w-[25px] rounded-fill' />
            </li><li style={{ borderRadius: 50 }} className='ml-[-5px] px-1 bg-gray-500 text-center text-white rounded-fill' >
              5+
            </li>
            <li style={{ borderRadius: 50 }} className=' bg-white p-1 ml-1 rounded-fill'>
              <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </li>
          </ul>
        </div>
      </div>
      <div id="default-tab-content">
        {['Cases', 'Timeline', 'Upload and Attach Documents', 'Progress Tracking', 'Communication', 'More'].map((tabId) => (
          <TabContent
            key={tabId}
            tabId={tabId}
            isActive={activeTab === tabId}
          >
            {tabId == "Cases" ?
              <>
              <All />
              </>
              :
              <>
              {tabId == "Timeline" ?
              <></>
              :
              <>
              {tabId == "Upload_Documents" ?
              <></>
              :
              <>
              {tabId == "Communication" ?
              <></>
              :
              <>
              <div>
                <h1>MORE</h1>
              </div>
              </>
            }
              </>
            }
              </>
            }
              </>
            }
          </TabContent>
        ))}
      </div>



    </div>
  );
};

const TabButton = ({ tabId, label, isActive, onClick }) => {
  return (
    <li className="me-2" role="presentation">
      <button
        className={`flex whitespace-no-wrap p-4 border-b-2 rounded-t-lg ${isActive
          ? 'border-blue-500 text-blue-500'
          : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
          }`}
        onClick={() => onClick(tabId)}
      >
        {label}
      </button>
    </li>
  );
};

const TabContent = ({ tabId, isActive, children }) => {
  return (
    <div
      className={`${isActive ? '' : 'hidden'
        } p-4 rounded-lg bg-gray-50 `}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>
    </div>
  );
};

export default Tabs;
