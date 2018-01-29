import { h } from 'preact';
import { format } from 'date-fns';
import style from './style';

const ItemCard = ({ item }) => (
	<div class={style.itemCard}>
		<div class={style.title}>
			{item.where}
			<div class={style.subTitle}>
				{format(item.date, 'dddd DD MMMM YYYY')}
			</div>
		</div>

		<div>{item.type}</div>

		<div class={style.times}>
			From: {item.from} | To: {item.to}
		</div>
	</div>
);

export default ItemCard;
