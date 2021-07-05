import React, { Component } from 'react';
import WorkshopDataService from '../../Services/WorkshopService';

export default class Tutorial extends Component {
    constructor(props) {
      super(props);
      his.onChangeWorkshopTitle = this.onChangeWorkshopTitle.bind(this);
      his.onChangeDate = this.onChangeDate.bind(this);
      his.onChangeTime = this.onChangeTime.bind(this);
      this.getWorkshop = this.getWorkshop.bind(this);
      this.updateWorkshop = this.updateWorkshop.bind(this);
      this.deleteWorkshop = this.deleteWorkshop.bind(this);

      this.state = {
        currentWorkshop: {
          userId: null,
          workshopTitle: "",
          date: "",
          time:"",
          approved: false
        },
        message: ""
      };
    }

    componentDidMount() {
        this.getWorkshop(this.props.match.params.id);
      }

      onChangeWorkshopTitle(e) {
        const workshopTitle = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentWorkshop: {
              ...prevState.currentWorkshop,
              workshopTitle: workshopTitle
            }
          };
        });
      }

      onChangeDate(e) {
        const date = e.target.value;
        
        this.setState(prevState => ({
          currentWorkshop: {
            ...prevState.currentWorkshop,
            date: date
          }
        }));
      }

      onChangeTime(e) {
        const time = e.target.value;
        
        this.setState(prevState => ({
          currentWorkshop: {
            ...prevState.currentWorkshop,
            time: time
          }
        }));
      }

    getWorkshop(id) {
        WorkshopDataService.get(id)
          .then(response => {
            this.setState({
              currentWorkshop: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      updateWorkshop() {
        WorkshopDataService.update(
          this.state.currentWorkshop.id,
          this.state.currentWorkshop
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The Workshop was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }

     deleteWorkshop() {    
     WorkshopDataService.delete(this.state.currentWorkshop.id)
         .then(response => {
         console.log(response.data);
           this.props.history.push('/workshop')
          })
         .catch(e => {
          console.log(e);
        });
     }
     render() {
        const { currentWorkshop } = this.state;
    
        return (
          <div>
            {currentWorkshop ? (
              <div className="edit-form">
                <h4>Workshop</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="workshopTitle">WorkshopTitle</label>
                    <input
                      type="text"
                      className="form-control"
                      id="workshopTitle"
                      value={currentWorkshop.workshopTitle}
                      onChange={this.onChangeWorkshopTitle}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      value={currentWorkshop.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                      type="text"
                      className="form-control"
                      id="time"
                      value={currentWorkshop.time}
                      onChange={this.onChangeTime}
                    />
                  </div>
    
                  <div className="form-group">
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentWorkshop.approved ? "Approved" : "Pending"}
                  </div>
                </form>
    
                {currentTutorial.published ? (
                  <button
                    className="badge badge-primary mr-2"
                    onClick={() => this.updatePublished(false)}
                  >
                    UnPublish
                  </button>
                ) : (
                  <button
                    className="badge badge-primary mr-2"
                    onClick={() => this.updatePublished(true)}
                  >
                    Publish
                  </button>
                )}
    
                <button
                  className="badge badge-danger mr-2"
                  onClick={this.deleteWorkshop}
                >
                  Delete
                </button>
    
                <button
                  type="submit"
                  className="badge badge-success"
                  onClick={this.updateWorkshop}
                >
                  Update
                </button>
                <p>{this.state.message}</p>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Workshop...</p>
              </div>
            )}
          </div>
        );
      }
    }
    
