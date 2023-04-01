
from pysteamsignin.steamsignin import SteamSignIn

steamLogin = SteamSignIn()

encodedData = steamLogin.ConstructURL('https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=checkid_setup&openid.return_to=https://evgouxjl7ceh43x3yclwzpipfi0ccytl.lambda-url.us-east-1.on.aws/&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select')
