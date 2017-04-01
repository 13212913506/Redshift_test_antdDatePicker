    import React from 'react';  
    import ReactDOM from 'react-dom';  
    import { DatePicker, message } from 'antd';  
	import moment from 'moment';
      const { MonthPicker, RangePicker } = DatePicker;
	  const dateFormat = 'YYYY/MM/DD';
      const monthFormat = 'YYYY/MM';
	  var d = new Date();
      var date = d.getFullYear() + "/" +(d.getMonth() + 1) + "/" + d.getDate() ;
    class App extends React.Component {  
      constructor(props) {  
        super(props);  
        this.state = {  
          date: '',  
        };  
      }  
     
      render() {  
        return (  
          <div style={{ width: 400, margin: '100px auto' }}>  
            <DatePicker onChange={onchange} />  
            <br />
            <MonthPicker onChange={onchange} placeholder="Select month" />  
            <br />
            <RangePicker  defaultValue={[moment(date, dateFormat), moment('2017/08/31', dateFormat)]}
            disabled
	        />
          </div>  
        );  
      }  
    }  
    ReactDOM.render(<App />, document.getElementById('root'));  