// Code adapted from https://sandny.com/2019/10/28/simple-tab-view-using-react-tabs/
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './TabComponent.css'
import Ownership from './Ownership.js'
import Energy from './Energy.js'
import Service from './Service.js'
import BeHuman from './BeHuman.js'

function TabComponents() {
    return(
    <Tabs defaultIndex={0} >  {/* defaultIndex define initial selected tab index .index start from 0 */}
        <div className='tab-list'><TabList>
            
                <Tab>Ownership</Tab>
                <Tab>Energy</Tab>
                <Tab>Service</Tab>
                <Tab>Be Human</Tab>
                
        </TabList>
        </div>

        {/* Tab 1 contents */}
        <TabPanel>
            <Ownership />
        </TabPanel>

        {/* Tab 2 contents */}
        <TabPanel>
            <Energy />
        </TabPanel>

        {/* Tab 3 contents */}
        <TabPanel>
            <Service />
        </TabPanel>

        {/* Tab 4 contents */}
        <TabPanel>
            <BeHuman />
        </TabPanel>
    </Tabs>
    );
    }

export default TabComponents;