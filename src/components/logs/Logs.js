import React, {  useEffect} from 'react'
import {connect} from 'react-redux';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions';

export const Logs = ({log: {logs, loading}, getLogs}) => {
  
    useEffect(()=> {
        getLogs();
    }, []); 

   
    if(logs ===null){return <h4>loading</h4>}
    return (
        <ul>
            {!loading && logs.length === 0 ? (<p>no logs</p>) : (
               logs.map(log => <LogItem key={log.id} log={log}></LogItem>)      
            )} 
        </ul>
    )
}
Logs.propTypes = {
    log:PropTypes.object.isRequired  
}
const mapStateToProps = state => ({
    log:state.log
})
export default connect(mapStateToProps, { getLogs } ) (Logs);