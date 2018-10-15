import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const hold = document.querySelector('.container');

class IndecitionApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            options: ['one','tow','three']
        };
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePick = this.handlePick.bind(this);

    }
    handleDeleteOption() {
        this.setState(() => {
            return { options: [] };
        }
        )

    }
    handlePick()
    {
        let random = Math.floor(Math.random()*this.state.options.length);
      let op = this.state.options[random];
      alert(op);
   
       
    }
   
    render()
    {
        const title = 'IndectionApp';
        const subTitle = 'sharping lives';
      

        return(
            <div>
            <Header title={title} subTitle={subTitle} />
            <Action hasOption={this.state.options.length>0}
            handlePick={this.handlePick}
            />
            <Options options={this.state.options} 
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
              
        return (
            <div>
                <h1>{this.props.title} </h1>
                < h2 >{this.props.subTitle} </h2>
                </div>
            )
        }
    }

    class Options extends React.Component
{
    
    render()
    {
        return(
            <div>
                <button 
                onClick={this.props.handleDeleteOption
                }>Remove</button>
             {this.props.options.map((op)=><Option key={op}
              optionText={op}/>)}
             <Option />      
            </div>
                    )
    }
}


class Action extends React.Component
{
    
    render()
    {
        return(
            <div>
            <button
             onClick={this.props.handlePick} 
             disabled={!this.props.hasOption}
             >
             What should i do ?</button>
            </div>
        )
    }
}

class AddOption extends React.Component
{
    onFormSubmit(e) 
    {
      
          e.preventDefault();
          const value = e.target.elements.option.value.trim();

          if(value)
          {
              console.log(value);
          }

      
    }
    render()
    {
       
        return(
           <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name='option' />
                    <button>Add option</button>
                </form>
           </div>
        )
    }
}

class Option extends React.Component
{
    
    render()
    {
        return(
        
            <div> 
          
            { 
                this.props.optionText
            } </div>
        )
        
    }
    
}
ReactDOM.render(<IndecitionApp/>,hold);