import './App.css';
import {ChatEngine} from 'react-chat-engine';
import BudgetTracker from './components/BudgetTracker';
import BucketList from './components/BucketList';
import DirectMessaging from './components/DirectMessaging';

function App() {
  return (
    // <div className="App">
    //   <BudgetTracker />
    //   <BucketList />
    // </div>
    <DirectMessaging />
    // <ChatEngine
    //   userName='shivkant'
    //   projectID = '2823e87a-55ac-4526-b654-07564cfec5b3'
    //   userSecret='secretPassword'
    // />
  );
}

export default App;
