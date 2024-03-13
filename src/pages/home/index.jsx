import React, { useState } from "react";
import CardsPlants from "../../components/CardPlant";
import { plants } from "../../data/plants";

export default function Home () {
    const [filters, setFilters] = useState([]);
    const [plantsList, setPlantsList] = useState(plants);

    const searchName = (e) => {
      const value = e.target.value
      const new_plants = plants.filter((plant) => plant.name.toLowerCase().includes(value.toLowerCase()));
      setPlantsList(new_plants);
    }

    
    const filterCategory = async (e) => {
      const value = e.target.value;
      
      if (filters.includes(value)) {
        const new_filters = filters.filter((filter) => filter !== value);
        console.log(new_filters)
        const new_plants =  new_filters.length > 0 ? plants.filter((plant) => new_filters.includes(plant.category)) : plants;

        setFilters(new_filters);
        setPlantsList(new_plants);
      } else {
        const new_filters = await [...filters, value]
        const new_plants = plants.filter((plant) => new_filters.includes(plant.category));
        setFilters(new_filters);
        setPlantsList(new_plants);
      }
    }

    const likePlant = (id) => {
      const new_plants = plantsList.map((plant) => {
        if (plant.id === id) {
          
          return {
            ...plant,
            reaction: plant.reaction === 'like' ? 'dislike' : 'like'
          }
        }
        return plant;
      });
      setPlantsList(new_plants);
    }
   
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>List</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <form>
              <div className="form-group">
                <label htmlFor="search">Rechercher</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="search"
                  onChange={(e) => searchName(e)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="classique" id="classique"  onChange={(e) => filterCategory(e)} />
                <label className="form-check-label" htmlFor="classique">
                  Classique
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="plante_grasse" id="plante_grasse" onChange={(e) => filterCategory(e)} />
                <label className="form-check-label" htmlFor="plante_grasse">
                  Plante Grasse
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="exterieure" id="exterieure" onChange={(e) => filterCategory(e)} />
                <label className="form-check-label" htmlFor="exterieure">
                  Extérieure
                </label>
              </div>
            </div>
        </div>

        <div className="row mt-3">
            <CardsPlants plantsList={plantsList} likePlant={likePlant} />
        </div>
      </div>
    );
}