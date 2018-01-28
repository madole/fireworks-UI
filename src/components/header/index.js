import { h, Component } from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';
import { format } from 'date-fns';

export default class Header extends Component {
	render({ updatedAt }) {
		const date = format(updatedAt, 'DD-MM-YYYY');
		const day = format(updatedAt, 'dddd');
		return (
			<div>
				<Toolbar className="toolbar">
					<Toolbar.Row>
						<Toolbar.Section align-start>
							<Toolbar.Title>Sydney Fireworks</Toolbar.Title>
						</Toolbar.Section>
						{updatedAt ? (
							<Toolbar.Section align-end>
								<Toolbar.Title>
									<span title={day}>
										Last Updated: {date}
									</span>
								</Toolbar.Title>
							</Toolbar.Section>
						) : null}
					</Toolbar.Row>
				</Toolbar>
			</div>
		);
	}
}
