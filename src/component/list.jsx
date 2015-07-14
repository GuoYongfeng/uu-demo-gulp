var React = require('react');  
 
var MessageList = React.createClass({  
  render: function() {
    return <a href={this.state.url}>
				<ul class="list">
					<li class="title">
						<span>{this.state.name}</span>
						<span class="fr mr">{this.state.detail}</span>
					</li>
					<li>
						<span>{this.state.options}</span>
						<i class="fr icon_dir"></i>
					</li>
					<li>
						<span>{this.state.datetime}</span>
						<i class="fr mr">{this.state.status}</i>
					</li>
				</ul>
			</a>; 
  }
});

module.exports = MessageList;
