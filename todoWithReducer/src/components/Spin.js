import React from 'react';
import {Dna} from 'react-loader-spinner';
import {useSelector} from "react-redux";
import {getLoading} from "../features/todoSlice";

function Spin() {

    const spinner = useSelector(getLoading)


    const loader = () => {
        if (spinner) {
            return (
                <div className="loading">
                    <Dna
                        visible={spinner}
                        height="100"
                        width="100"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="loader"
                    />
                </div>
            );
        }
    };

    return loader();
}

export default Spin;