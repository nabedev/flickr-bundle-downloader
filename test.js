(()=>{

   const bar = () => { console.log('bar') }
   
   for (let i = 0; i < 10; i++) {
   try {
      console.log(i)
      throw new Error('foo')
   } catch (e) {
      console.log('bar')
      return bar()
   } finally {
      console.log('final')
   }
}
})()
