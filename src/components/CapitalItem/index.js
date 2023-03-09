import './index.css'

const CapitalItem = props => {
  const {details} = props
  const {id, capitalDisplayText} = details
  return (
    <option value={id} className="option">
      {capitalDisplayText}
    </option>
  )
}

export default CapitalItem
