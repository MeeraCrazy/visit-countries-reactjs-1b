import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitCountry} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onDeleteButton = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visited-country-list">
      <div className="visited-countries-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="details-section">
          <p className="visited-countries-title">{name}</p>
          <button
            type="button"
            className="delete-button"
            onClick={onDeleteButton}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
