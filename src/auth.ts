import { Types } from 'ably/ably';
// Import the webworker version:
import * as Ably from 'ably/browser/static/ably-webworker.min';
// import * as Ably from 'ably/promises';

// Update the API key
const ABLY_API_KEY = undefined;

export default class Auth {
  private ably: Ably.Rest;

  constructor() {
    if (!ABLY_API_KEY) {
      throw new Error(
        `You need update ABLY_API_KEY, its currently ${ABLY_API_KEY}`
      );
    }
    const clientOptions: Ably.Types.ClientOptions = {
      key: ABLY_API_KEY,
    };
    this.ably = new Ably.Rest(clientOptions);
  }

  createToken = async (
    clientId: string
  ): Promise<Types.TokenDetails | void> => {
    try {
      return await this.ably.auth.requestToken({ clientId });
    } catch (e) {
      console.error(e);
    }
  };
}
