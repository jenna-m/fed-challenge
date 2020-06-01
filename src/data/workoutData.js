// Import workout images
import workout1 from '../images/workouts/workouts1.png';
import workout2 from '../images/workouts/workouts2.png';
import workout3 from '../images/workouts/workouts3.png';
import workout4 from '../images/workouts/workouts4.png';
import workout5 from '../images/workouts/workouts5.png';
import workout6 from '../images/workouts/workouts6.png';
import workout7 from '../images/workouts/workouts7.png';
import workout8 from '../images/workouts/workouts8.png';

//Import trainer avatars
import avatar1 from '../images/avatars/avatar1.png';
import avatar2 from '../images/avatars/avatar2.png';
import avatar3 from '../images/avatars/avatar3.png';
import avatar4 from '../images/avatars/avatar4.png';
import avatar5 from '../images/avatars/avatar5.png';
import avatar6 from '../images/avatars/avatar6.png';
import avatar7 from '../images/avatars/avatar7.png';
import avatar8 from '../images/avatars/avatar8.png';

// Workout Data Array
const workoutData = [
	{
		id: 1,
		title: 'Lake Inniscarra, Ireland—Pyramid',
		src: workout1,
		isPlaylist: false,
		quantity: '1',
		time: '30:53',
		distance: '6,248 M',
		avatar: avatar1,
		trainerName: 'Sally',
	},
	{
		id: 2,
		title: 'Performance Series',
		src: workout2,
		isPlaylist: true,
		quantity: '9',
		time: '',
		distance: '',
		avatar: avatar2,
		trainerName: 'Sarah',
	},
	{
		id: 3,
		title: 'Slow Pulls and Fast Intervals',
		src: workout3,
		isPlaylist: false,
		quantity: '1',
		time: '44:13',
		distance: '9,948 M',
		avatar: avatar3,
		trainerName: 'Janice',
	},
	{
		id: 4,
		title: '20 Minutes to Toned',
		src: workout4,
		isPlaylist: true,
		quantity: '12',
		time: '',
		distance: '',
		avatar: avatar4,
		trainerName: 'Tim',
	},
	{
		id: 5,
		title: 'Charles Race, Boston, Massachusetts',
		src: workout5,
		isPlaylist: false,
		quantity: '1',
		time: '36:22',
		distance: '8,648 M',
		avatar: avatar5,
		trainerName: 'Grace',
	},
	{
		id: 6,
		title: 'Full-Body HIIT Series',
		src: workout6,
		isPlaylist: true,
		quantity: '12',
		time: '',
		distance: '',
		avatar: avatar6,
		trainerName: 'Candice',
	},
	{
		id: 7,
		title: 'Kafue River, Zambia—Power Stroke Pyramid',
		src: workout7,
		isPlaylist: false,
		quantity: '1',
		time: '22:22',
		distance: '4,660 M',
		avatar: avatar7,
		trainerName: 'Jason',
	},
	{
		id: 8,
		title: 'Shred & Burn Series',
		src: workout8,
		isPlaylist: true,
		quantity: '16',
		time: '',
		distance: '',
		avatar: avatar8,
		trainerName: 'Sam',
	},
];

export default workoutData;
