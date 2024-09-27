---
sidebar_position: 5
---

# Silent Unix Installer (macOS, Linux)
The installer for macOS and Linux requires user interaction during the installation. The silent mode lets you install the *AskUI Suite* without further user interaction.

## Usage

### Help Arguments

- `-v, —version`: Display the installer version.
```powershell
> bash ./AskUI-Suite-<your version>-User-Installer-<MacOS or Linux>-<AMD64 or ARM64>-Full.run -v

AskUI Suite Installer version 24.8.1
```

- `-h, —help`: Display help information.
```powershell
> bash ./AskUI-Suite-<your version>-User-Installer-<MacOS or Linux>-<AMD64 or ARM64>-Full.run -h 

AskUI Suite Installer version 24.9.1.2
 1) Getting help or info about ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run:
    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run -h, --help      Print this message
    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run -v, --version   Print installer version
    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run -i, --info      Print embedded info: title, version, OS, Architecture, ...

 2) Running ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run:
    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run [options]
    with following options (in that order)
    -a, --accept-license    
        Bypass the display and prompting for acceptance of the
        askui GmbH License Agreement. By passing this option
        you indicate that you have read and accept the License Agreement.

    -sm, --silent-mode
        Run the installer in silent mode. No user interaction is required.
        This implies that the license agreement is accepted.

    -cfg, --configuration-file <filePath>    
        Installer configuration file path in JSON format.
        Available keys are:
            OverwritePreviousInstaller (true/false)
            ProxyHttpAddress (string)
            ProxyHttpsAddress (string)
            TLSConnectionCertificate (string)
```

- `-i, —info`: Display embedded information about the installer.
```powershell
> bash ./AskUI-Suite-<your version>-User-Installer-<MacOS or Linux>-<AMD64 or ARM64>-Full.run -i
Identification: AskUI Suite Installer
version: 24.9.1.2
Built for OS: MacOS
Built for Architecture: ARM64
Uncompressed size: 1402820 KB
Compression: gzip
Encryption: n
Date of packaging: Wed Sep 25 09:28:17 CEST 2024
Built with Makeself version 2.5.0
```

### Installation Arguments

The installer accepts three arguments:

- `-a, --accept-license`: Bypass the display and prompting for acceptance of  askui GmbH License Agreement. By passing this option you indicate that you have read and accept the License Agreement.
- `-sm, --silent-mode`: Run the installer in silent mode. No user interaction is required. This implies that the license agreement is accepted.
  - If used without a configuration file, the following default settings will be applied:
    - `OverwritePreviousInstaller`: `false`
    - `ProxyHttpAddress`: undefined
    - `ProxyHttpsAddress`: undefined
    - `TLSConnectionCertificate`: undefined
- `-cfg, --configuration-file <absoluteFilePath>`: Specify the path to the installer configuration file in JSON format.
  - Available keys are:
    - `OverwritePreviousInstaller`: (true/false)
    - `ProxyHttpAddress`: (string)
    - `ProxyHttpsAddress`: (string)
    - `TLSConnectionCertificate`: (string)

```json
{
    "OverwritePreviousInstaller": false,
    "ProxyHttpAddress"  : "http://Proxy:8080",
    "ProxyHttpsAddress"  : "http://Proxy:8080",
    "TLSConnectionCertificate": "<absoluteFilePath>",
}
```
