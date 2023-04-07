import { useParams } from 'react-router-dom'

function Accomodation() {
  const { accomodationId } = useParams()

  return <div>Logement numéro {accomodationId}</div>
}

export default Accomodation
