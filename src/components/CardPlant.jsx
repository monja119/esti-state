

export default function CardsPlants({ plantsList, likePlant }) {
    return (
       <>
            {plantsList.map((plant, key) => (
                <div className="col-12 col-md-3 col-lg-3 mb-2" key={key}>
                <div className="card">
                  <img src={plant?.image} className="card-img-top" alt={plant?.name} />
                  <div className="card-body">
                    <h5 className="card-title">{plant?.name}</h5>
                    <p className="card-text">
                      <i className={`text-warning fas fa-thumbs-${plant?.reaction === 'like' ? 'up' : 'down'}`}></i>
                    </p>
                    <p className="card-text">
                      <button 
                        onClick={() => likePlant(plant.id)}
                      className="btn btn-primary form-control">{plant?.reaction === 'like' ? "Je n'aime pas" : "J'aime"}</button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </>
      
    );
}