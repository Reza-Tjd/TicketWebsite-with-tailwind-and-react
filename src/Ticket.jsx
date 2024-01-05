import React, { Component } from "react";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: {
        Iran: ["Tehran", "Tabriz", "Mashahd"],
        Turkey: ["Izmir", "Antalia", "Ankara"],
        USA: ["California", "Chicago", "Washington"],
      },
      mainCountryCities: [],
    };
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  // onChangeHandler(event) {
  //   const selectedCountries = event.target.value;
  //   const selectedCities = this.state.countriesData[selectedCountries];

  //   this.setState({
  //     mainCountryCities: selectedCities,
  //   });
  // }

  onChangeHandler = (event) => {
    const selectedCountries = event.target.value;

    if (selectedCountries === "-1") {
      this.setState({
        mainCountryCities: [],
      });
    } else {
      const selectedCities = this.state.countriesData[selectedCountries];
      this.setState({
        mainCountryCities: selectedCities,
      });
    }
  };

  render() {
    return (
      <div>
        {/* ticket part */}
        <div className="flex justify-center items-center h-screen">
          <div className="  bg-slate-400/45 rounded-md md:pt-8 py-8 px-6">
            {/* fields part */}
            <div className="md:flex md:justify-around  lg:px-20 lg:space-x-32 md:px-12 md:space-x-14 px-3  ">
              {/* leftside fields */}
              <div className="child:w-72 md:space-y-8 child:h-9 child:rounded-sm child:pl-3 space-y-6 pb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="block "
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="block"
                />
                <select
                  name=""
                  id=""
                  className="block"
                  onChange={this.onChangeHandler}
                >
                  <option value="-1">Please select a Country ...</option>
                  <option value="Iran">Iran</option>
                  <option value="Turkey">Turkey</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              {/* rightside fields */}
              <div className=" child:w-72   child:h-9 child:rounded-sm child:pl-3 md:space-y-8 space-y-6">
                <input type="text" placeholder="Last Name" className="block" />
                <input type="email" placeholder="Email" className="block" />
                <select
                  name=""
                  id=""
                  className="block"
                  onChange={this.onChangeHandler}
                >
                  <option value="-1"> Please select a city...</option>
                  {Array.isArray(this.state.mainCountryCities) &&
                  this.state.mainCountryCities.length > 0
                    ? this.state.mainCountryCities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))
                    : null}
                </select>
              </div>
            </div>
            {/* button part */}
            <div className="flex justify-center pt-8">
              <button className="bg-yellow-400 w-36 h-10 rounded-md ">
                Book a Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
