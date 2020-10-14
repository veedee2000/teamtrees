import React, { Component } from 'react'
import Institute from './institute';

export default class Education extends Component {

    constructor(){
        super()
        this.state = {
            institutes: [{
                name: 'JU',
                start: '2019',
                end: '2020',
                summary: 'Hi I am Varun Das'
            }] // Array of object {name, start, end, summary}
        }
        console.log(this.state.institutes)
    }

    render() {

        return (
            <div>
                <section className="colorlib-experience" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Timeline</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            {this.state.institutes.map((institute, index) => (
                                <Institute information = {institute} key = {index}></Institute>
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