export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['new', 'join']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
