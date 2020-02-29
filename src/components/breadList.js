import React, { Component } from 'react';
import Select from 'react-select';
import '../css/breadList.css';
import { Link } from 'react-router-dom';
import breadJSON from '../breads/breads.json';

class BreadList extends Component {
    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    }

    render() {
        const breads = breadJSON.breads.map( (bread) => {
            return { name: bread.name, id: bread.id };
        });
        const { selectedOption } = this.state;

        if(breads.length){
            let breadOptions = breads.map((bread) => {
                return { value: bread.id, label: bread.name }
            });

            return (
                <div className="select-bread-area">
                    <p>Select a bread recipe below: </p>
                    <div className="select-bread">
                        <Select value={selectedOption} onChange={this.handleChange} options={breadOptions} />
                    </div>
                    {selectedOption && 
                        //ToDo: <RecipeOverview> time estimate? days? ingredients?
                        <div>
                            <Link to={{
                                pathname: '/bake',
                                state: {
                                    breadId: selectedOption.value,
                                    breadName: selectedOption.label,
                                }
                            }}>Bake {selectedOption.label}?</Link>  
                        </div>
                    }
                </div>
            )
        }
        else{
            return (
                <div>
                    <p>No Breads Found!</p>
                </div>
            )
        }
    }
}

export default BreadList;