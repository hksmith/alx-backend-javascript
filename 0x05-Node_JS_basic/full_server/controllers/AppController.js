/**
 * Contains the miscellaneous route handlers.
 * @author Kalab Solomon <https://github.com/hksmith>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
