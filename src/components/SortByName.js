import Contacts from "./Contacts"
const SortByName = ({ addContact }) => {
      return (
            <div>
                 
                   <button onClick={addContact}>
                    Sort by Name
                </button>
            </div>
      )
}

export default SortByName
