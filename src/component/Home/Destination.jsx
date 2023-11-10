

const Destination = () => {
    return (
        <div className="container mx-auto mt-10">
            <form className="flex gap-4 items-end justify-between bg-white rounded-lg p-10 ">
                <div>
                    <label htmlFor="" className="styles-font mb-2 inline-block">Destination</label>
                    <select className="select select-primary w-full max-w-xs">
                        <option disabled selected>Where to go?</option>
                        <option>London</option>
                        <option>Sentmartine</option>
                        <option>America</option>
                        <option>Paris</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="" className="styles-font mb-2 inline-block">Type</label>
                    <input type="text" placeholder="Activity" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="" className="styles-font mb-2 inline-block">When</label>
                    <input type="date" placeholder="Activity" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="" className="styles-font mb-2 inline-block">Guest</label>
                    <input type="number" placeholder="Activity" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <button className="btn bg-yellow-400 hover:bg-blue-500" type="submit" >Search</button>
                </div>
            </form>
        </div>
    );
};

export default Destination;