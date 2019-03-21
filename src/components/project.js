import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

toggleCategories() {
  if(this.state.activeTab === 0) {
    return(

    <div className="project-grid">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'bblack', height: '176px', background: 'url(https://agileengine.com/wordpress/wp-content/uploads/2018/03/rn_2.png)'}} >
        React Project</CardTitle>
        <CardText>
          ka;lkdsfak;dflkasjdflksdjflhasdkjghdskjhfsdghsgdskjhsddkjshagkjdha;khdgl;g;akjhsdgkjahsgk
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
          </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="Share" />
            </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'bblack', height: '176px', background: 'url(https://agileengine.com/wordpress/wp-content/uploads/2018/03/rn_2.png)'}} >
        React Project</CardTitle>
        <CardText>
          ka;lkdsfak;dflkasjdflksdjflhasdkjghdskjhfsdghsgdskjhsddkjshagkjdha;khdgl;g;akjhsdgkjahsgk
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
          </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="Share" />
            </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'bblack', height: '176px', background: 'url(https://agileengine.com/wordpress/wp-content/uploads/2018/03/rn_2.png)'}} >
        React Project</CardTitle>
        <CardText>
          ka;lkdsfak;dflkasjdflksdjflhasdkjghdskjhfsdghsgdskjhsddkjshagkjdha;khdgl;g;akjhsdgkjahsgk
        </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
          </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="Share" />
            </CardMenu>
      </Card>
      </div>


    )
  } else if(this.state.activeTab === 1) {
    return(
      <Card shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
      <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis.
      </CardText>
      <CardActions border>
          <Button colored>View Updates</Button>
      </CardActions>
  </Card>

    )
  } else if (this.state.activeTab === 2) {
    return(
      <div><h1>Vue</h1></div>
    )
  } else if (this.state.activeTab === 3) {
    return(
    <div><h1>Backend</h1></div>
    )
  }
}

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Other</Tab>
          <Tab>Vue</Tab>
          <Tab>Backend</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

          {/*this.toggleCategories()*/}


      </div>
    )
  }
}

export default Project
