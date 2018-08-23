export default (generator, iterator = {})=> {
  iterator[Symbol.iterator] = generator;
  return iterator;
};
