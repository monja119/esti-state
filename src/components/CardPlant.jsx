

export default function CardsPlants({ plantsList }) {
    return (
       <>
            {plantsList.map((plant, key) => (
                <div className="col-12 col-md-3 col-lg-3 mb-2" key={key}>
                <div className="card">
                  <img src={plant?.image} className="card-img-top" alt={plant?.name} />
                  <div className="card-body">
                    <h5 className="card-title">{plant?.name}</h5>
                    <p className="card-text">
                      <strong>Lumière:</strong> {plant?.lumiere}
                    </p>
                    <p className="card-text">
                      <strong>Eau:</strong> {plant?.eau}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </>
      
    );
}