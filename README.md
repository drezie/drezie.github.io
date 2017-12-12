# TurtleCoin(TRTL)

## [ANN]
```
Name:          : TurtleCoin  
Algorithm      : [CryptoNote](http://cryptonote.org)
                 ASIC resistant, same algo as monero, aeon and bytecoin  
Time           : 30 second block time - made by and for miners.  
Econ           : Two decimal places like USD  
Supply Cap     : Plenty.  
Address Prefix : "TRTL".   
Currency Code  : "TRTL".  
```

## Using TurtleCoin

### Make a Wallet
Download the binary tarball distribution from the [Release](https://github.com/turtlecoin/turtlecoin/releases) section of the repo and unpack it, or build from source. Then run

```bash
./simplewallet
```

Press `G` to generate new wallet.  
Enter a filename for your wallet (default is _wallet.bin_).  
Enter a passphrase for your wallet. *Warning:* There is no passphrase confirmation, so be careful!

### Get Your Address
In the running _simplewallet_ interface, type `address` and press enter.

### Start the Daemon
With _simplewallet_ running (in background or another terminal), run
```bash
./TurtleCoind
```

### Mine
With _simplewallet_ and `TurtleCoind` running (in background or another terminal), run

```bash
./miner --address <address>
```

### Check Your Balance
In the running _simplewallet_, type `balance` and press enter to see your balance.

### Send TurtleCoin
In the running _simplewallet_, type
```
transfer 0 <destination_address> <amount>
```
(note that `0` is the _mixin_ arg and will vary in future.)

## Official Communications
- <http://turtlecoin.lol/>
- <http://discord.turtlecoin.lol>
- <http://twitter.turtlecoin.lol>

## Github Repositories
- <http://github.turtlecoin.lol>

## Contributing
If you want to start contributing, the best bet right now is to join our discord and discuss with the community there. Look for RockSteady, bebop, or michelangelo for guidence. Cowabunga!

### Helpers Needed
- PR Team
- Graphics Team
- Mining Pool Operators (compatible with monero/aeon/bytecoin mining tools and pools)
- Windows Dev to compile builds
- Apple Dev to compile build
- Packagers to package various distributions (ArchLinux, Ubuntu, RHEL/CentOS/Fedora, etc)
# TRTL
