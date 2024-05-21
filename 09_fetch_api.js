// FETCH API
// fetch default HTTPGET Çalışır

const sendDataAsync = async () => {
	fetch('https://jsonplaceholder.typicode.com/todos', {
		method: 'POST',
		body: JSON.stringify({
			title: 'test',
			completed: false,
			id: 201,
			userId: 1,
		}),
		headers: {
			Accept: 'application/json',
			ContentType: 'application/json',
		},
	});
};

const loadTodos = () => {
	fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' })
		.then((response) => {
			console.log('response', response);
			return response.json();
		})
		.then((data) => {
			console.log('data', data);
			return data;
		})
		.catch((err) => {
			console.log('err', err);
		});
};

const loadTodosAsync = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await response.json();
		console.log('data', data);
	} catch (error) {
		console.log('error', error);
	}
};
