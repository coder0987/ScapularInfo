import { Link } from "react-router-dom";

const PlenaryIndulgence = () => {
    return (
        <>
            <p className="pr">*To gain a plenary indulgence, one must:</p>
            <ul className="list-disc pr pl-6">
                <li>Be in the state of grace and free from all attachment to sin, even venial sin</li>
                <li>Have a general intention to gain the indulgence</li>
                <li>Perform acts to obtain the indulgence</li>
                <li>Receive the Sacraments of Reconciliation and Holy Eucharist</li>
                <li>Pray for the intentions of the Holy Father (One each of Our Father, Hail Mary and Glory Be suffices)</li>
            </ul>
            <p className="pr caption">See the Pope's current intentions <Link target="_blank" rel="noopener noreferrer" className="link" to="https://popesprayerusa.net/">here</Link></p>
        </>
    );
  };
  
  export default PlenaryIndulgence;