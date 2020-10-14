import React, { Component } from 'react'
import Company from './company'

export default class Experience extends Component {

    constructor(){
        super()
        this.state = {
            companies: [{
                name: 'Amazon',
                role: 'Summer Intern',
                start: 'May\' 21',
                end: 'July \'21',
                summary: null
            }] // Array of object {name, role, start, end, summary}
        }
    }

    render() {

        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            {this.state.companies.map((companany, index) => (
                                <Company information = {companany} key = {index}></Company>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }

}