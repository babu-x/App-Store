// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, onChangeTabId, isActive} = props
  const {displayText, tabId} = eachTab

  const changeTab = () => {
    onChangeTabId(tabId)
  }

  const selectedTab = isActive ? 'active-tab' : ''
  return (
    <li>
      <button
        type="button"
        className={`each-tab ${selectedTab}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
