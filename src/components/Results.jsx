import React from 'react';


class Results extends React.Component {
    render() {

        const style = {'display': 'none'}
        const rows = [1, 2, 3, 4];

        // TODO - consider revising the number of tabs, since this shouldn't dictate how many
        // runs that a user can do

        let buttons = () => {
            return rows.map((x, index) => {
                        return (
                            <li key={index} id={"view" + x + "_tab"} style={style}>
                                <a
                                //onClick={"changeOutputStateClass(" + x + ")"}
                                id={"view" + x + "_link"} href={"#view" + x}>
                                    Run {x}
                                </a>
                            </li>
                        )
                    })
        }

        let contents = () => {
            return rows.map((x, index) => {
                return (
                    <div key={index} id={"view" + x} className="views">
                        <div id={"tabular_output_" + x}>
                            <table id={"results_table_" + x} className="results_table"></table>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="collapsible_div tab_container">
                <ul className="tabs" data-persist="false">
                    {buttons()}
                    {contents()}
              </ul>
            </div>
        )
    }
}

export default Results;
