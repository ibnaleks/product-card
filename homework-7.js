import { comments, firstTenComments } from './comments.js';

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const colors = ['red', 'black', 'yellow', 'white', 'brown', 'blue', 'purple'];
const isPurple = colors.includes('purple');

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = array => array.reverse();

reverseArray(numbers);
reverseArray(colors);

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const commentsWithEmailDoteCom = firstTenComments.filter(comment => comment.email.includes('.com'));

console.log(commentsWithEmailDoteCom);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedComments = firstTenComments.map(comment => comment.id <= 5 ? { ...comment, postId: 2 } : { ...comment, postId: 1 });

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const nameIdComments = firstTenComments.map(comment => ({ id: comment.id, name: comment.name }));

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const validateComments = firstTenComments.map(comment => ({ ...comment, isInvalid: comment.body.length > 180 }));

// 11. Используя метод массива reduce вывести массив почт и провернуть тоже самое с помощью метода map

const emailsByReduce = comments.reduce((array, comment) => [...array, comment.email], []);

const emailsByMap = comments.map((comment) => comment.email);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsByReduceString = emailsByReduce.toString();

const emailsByMapString = emailsByMap.join(' | ');