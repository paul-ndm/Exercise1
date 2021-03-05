

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Component() {
    return(
  
    <Tabs>
      <TabList>
        <Tab>1</Tab>
        <Tab disabled>2</Tab>
        <Tab>3</Tab>
        <Tab>4</Tab>
        <Tab>5</Tab>
      </TabList>
  
      <TabPanel>
        <p>hi</p>
      </TabPanel>
      <TabPanel>
        <p>hi</p>
      </TabPanel>
      <TabPanel>
        <p>hi</p>
      </TabPanel>
      <TabPanel>
        <p>hi</p>
      </TabPanel>
      <TabPanel>
        <p>hi</p>
      </TabPanel>
    </Tabs>
    )
  }

  export default Component
  