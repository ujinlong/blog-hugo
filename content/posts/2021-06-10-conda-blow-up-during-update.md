---
title: "Rant: Miniconda blow-up during udpate"
date: "2021-06-10T19:45:43+02:00"
description: "The whole package."
published: "2021-06-10T21:42:58+0200"
# lastmod: ""
categories:
    - 笔记
tags:
    - Python
---

## First and foremost, my life is miserable.

{{<fold "Would you like conda to send this report to the core maintainers? Upload did not complete. Thank you for helping to improve conda.">}}

```text
  environment variables:
                 CIO_TEST=<not set>
          CONDA_BACKUP_AR=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-ar
          CONDA_BACKUP_AS=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-as
          CONDA_BACKUP_CC=x86_64-apple-darwin13.4.0-clang
CONDA_BACKUP_CC_FOR_BUILD=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-clang
      CONDA_BACKUP_CFLAGS=-march=core2 -mtune=haswell -mssse3 -ftree-vectorize -fPIC -fPIE
                          -fstack-protector-strong -O2 -pipe -isystem
                          /opt/miniconda3/envs/econsa/include
   CONDA_BACKUP_CHECKSYMS=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-checksyms
       CONDA_BACKUP_CLANG=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-clang
     CONDA_BACKUP_CLANGXX=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-clang++
CONDA_BACKUP_CMAKE_PREFIX_PATH=:/opt/miniconda3/envs/econsa
CONDA_BACKUP_CONDA_BUILD_SYSROOT=/Library/Developer/CommandLineTools/SDKs/MacOSX10.15.sdk
         CONDA_BACKUP_CXX=x86_64-apple-darwin13.4.0-clang++
    CONDA_BACKUP_CXXFLAGS=-march=core2 -mtune=haswell -mssse3 -ftree-vectorize -fPIC -fPIE
                          -fstack-protector-strong -O2 -pipe -stdlib=libc++ -fvisibility-
                          inlines-hidden -std=c++14 -fmessage-length=0 -isystem
                          /opt/miniconda3/envs/econsa/include
CONDA_BACKUP_CXX_FOR_BUILD=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-clang++
CONDA_BACKUP_DEBUG_CFLAGS=-march=core2 -mtune=haswell -mssse3 -ftree-vectorize -fPIC -fPIE
                          -fstack-protector-strong -O2 -pipe -Og -g -Wall -Wextra -isystem
                          /opt/miniconda3/envs/econsa/include
CONDA_BACKUP_DEBUG_CXXFLAGS=-march=core2 -mtune=haswell -mssse3 -ftree-vectorize -fPIC -fPIE
                          -fstack-protector-strong -O2 -pipe -stdlib=libc++ -fvisibility-
                          inlines-hidden -std=c++14 -fmessage-length=0 -Og -g -Wall -Wextra
                          -isystem /opt/miniconda3/envs/econsa/include
CONDA_BACKUP_DEBUG_FFLAGS=-march=core2 -mtune=haswell -ftree-vectorize -fPIC -fstack-protector
                          -O2 -pipe -isystem /opt/miniconda3/envs/econsa/include
CONDA_BACKUP_DEBUG_FORTRANFLAGS=-march=core2 -mtune=haswell -ftree-vectorize -fPIC -fstack-protector
                          -O2 -pipe -isystem /opt/miniconda3/envs/econsa/include
         CONDA_BACKUP_F77=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-gfortran
         CONDA_BACKUP_F90=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-gfortran
         CONDA_BACKUP_F95=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-gfortran
          CONDA_BACKUP_FC=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-gfortran
      CONDA_BACKUP_FFLAGS=-march=core2 -mtune=haswell -ftree-vectorize -fPIC -fstack-protector
                          -O2 -pipe -isystem /opt/miniconda3/envs/econsa/include
CONDA_BACKUP_FORTRANFLAGS=-march=core2 -mtune=haswell -ftree-vectorize -fPIC -fstack-protector
                          -O2 -pipe -isystem /opt/miniconda3/envs/econsa/include
    CONDA_BACKUP_GFORTRAN=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-gfortran
        CONDA_BACKUP_HOST=x86_64-apple-darwin13.4.0
        CONDA_BACKUP_INDR=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-indr
CONDA_BACKUP_INSTALL_NAME_TOOL=/opt/miniconda3/envs/econsa/bin/x86_64-apple-
                          darwin13.4.0-install_name_tool
          CONDA_BACKUP_LD=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-ld
  CONDA_BACKUP_LDFLAGS_LD=-pie -headerpad_max_install_names -dead_strip_dylibs -rpath
                          /opt/miniconda3/envs/econsa/lib -L/opt/miniconda3/envs/econsa/lib
     CONDA_BACKUP_LIBTOOL=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-libtool
        CONDA_BACKUP_LIPO=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-lipo
          CONDA_BACKUP_NM=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-nm
      CONDA_BACKUP_NMEDIT=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-nmedit
       CONDA_BACKUP_OTOOL=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-otool
   CONDA_BACKUP_PAGESTUFF=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-pagestuff
      CONDA_BACKUP_RANLIB=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-ranlib
CONDA_BACKUP_REDO_PREBINDING=/opt/miniconda3/envs/econsa/bin/x86_64-apple-
                          darwin13.4.0-redo_prebinding
     CONDA_BACKUP_SDKROOT=/Library/Developer/CommandLineTools/SDKs/MacOSX10.15.sdk
     CONDA_BACKUP_SEGEDIT=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-segedit
CONDA_BACKUP_SEG_ADDR_TABLE=/opt/miniconda3/envs/econsa/bin/x86_64-apple-
                          darwin13.4.0-seg_addr_table
    CONDA_BACKUP_SEG_HACK=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-seg_hack
        CONDA_BACKUP_SIZE=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-size
     CONDA_BACKUP_STRINGS=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-strings
       CONDA_BACKUP_STRIP=/opt/miniconda3/envs/econsa/bin/x86_64-apple-darwin13.4.0-strip
CONDA_BACKUP__CONDA_PYTHON_SYSCONFIGDATA_NAME=_sysconfigdata_x86_64_apple_darwin13_4_0
  CONDA_BACKUP_host_alias=x86_64-apple-darwin13.4.0
        CONDA_DEFAULT_ENV=base
                CONDA_EXE=/opt/miniconda3/bin/conda
             CONDA_PREFIX=/opt/miniconda3
    CONDA_PROMPT_MODIFIER=(base)
         CONDA_PYTHON_EXE=/opt/miniconda3/bin/python
               CONDA_ROOT=/opt/miniconda3
              CONDA_SHLVL=1
           CURL_CA_BUNDLE=<not set>
                     PATH=/opt/miniconda3/bin:/opt/miniconda3/bin:/opt/miniconda3/bin:/opt/minic
                          onda3/bin:/opt/miniconda3/bin:/Users/loikein/.rbenv/shims:/Users/
                          loikein/.gem/ruby/3.0.0/bin:/usr/local/lib/ruby/gems/3.0.0/bin:/usr
                          /local/lib/ruby/gems/2.7.0/bin:/usr/local/opt/ruby/bin:/Users/loikein
                          /.jenv/shims:/Users/loikein/Dakota/bin:/Users/loikein/Dakot
                          a/share/dakota/test:/usr/local/opt/python@3.9/bin:/usr/local/opt/opens
                          sl@1.1/bin:/opt/miniconda3/bin:/usr/local/opt/tcl-tk/bin:/usr/local/op
                          t/qt/bin:/Users/loikein/.jenv/bin:/Users/loikein/bin:/usr/loca
                          l/bin:/usr/local/sbin:/opt/miniconda3/condabin:/usr/bin:/bin:/usr/sbin
                          :/sbin:/Applications/VMware Fusion.app/Contents/Public:/Library/TeX/te
                          xbin:/usr/local/MacGPG2/bin:/Library/Apple/usr/bin:/usr/local/go/bin:/
                          usr/local/opt/fzf/bin:/Users/loikein/dotfiles/zsh/.antigen/bundles
                          /robbyrussell/oh-my-zsh/lib:/Users/loikein/dotfiles/zsh/.antigen/b
                          undles/robbyrussell/oh-my-zsh/plugins/colored-man-pages:/Users/loikein
                          /dotfiles/zsh/.antigen/bundles/robbyrussell/oh-my-zsh/plugins/fzf:
                          /Users/loikein/dotfiles/zsh/.antigen/bundles/robbyrussell/oh-my-zs
                          h/plugins/git:/Users/loikein/dotfiles/zsh/.antigen/bundles/robbyru
                          ssell/oh-my-zsh/plugins/vi-
                          mode:/Users/loikein/dotfiles/zsh/.antigen/bundles/robbyrussell/oh-
                          my-zsh/plugins/z:/Users/loikein/dotfiles/zsh/.antigen/bundles/zsh-
                          users/zsh-autosuggestions:/Users/loikein/dotfiles/zsh/.antigen/bun
                          dles/zdharma/fast-syntax-highlighting:/Users/loikein/dotfiles/zsh/
                          .antigen/bundles/romkatv/powerlevel10k
          PKG_CONFIG_PATH=/usr/local/opt/ruby/lib/pkgconfig:/usr/local/opt/tcl-
                          tk/lib/pkgconfig:/usr/local/opt/openssl@1.1/lib/pkgconfig
               PYTHONPATH=:/Users/loikein/Dakota/share/dakota/Python:/Users/loikein/Dako
                          ta/share/dakota/Python
       REQUESTS_CA_BUNDLE=<not set>
            SSL_CERT_FILE=<not set>

     active environment : base
    active env location : /opt/miniconda3
            shell level : 1
       user config file : /Users/loikein/.condarc
 populated config files : /Users/loikein/.condarc
          conda version : 4.10.1
    conda-build version : not installed
         python version : 3.9.5.final.0
       virtual packages : __osx=10.15.7=0
                          __unix=0=0
                          __archspec=1=x86_64
       base environment : /opt/miniconda3  (writable)
      conda av data dir : /opt/miniconda3/etc/conda
  conda av metadata url : https://repo.anaconda.com/pkgs/main
           channel URLs : https://conda.anaconda.org/conda-forge/osx-64
                          https://conda.anaconda.org/conda-forge/noarch
                          https://repo.anaconda.com/pkgs/main/osx-64
                          https://repo.anaconda.com/pkgs/main/noarch
                          https://repo.anaconda.com/pkgs/r/osx-64
                          https://repo.anaconda.com/pkgs/r/noarch
          package cache : /opt/miniconda3/pkgs
                          /Users/loikein/.conda/pkgs
       envs directories : /opt/miniconda3/envs
                          /Users/loikein/.conda/envs
               platform : osx-64
             user-agent : conda/4.10.1 requests/2.24.0 CPython/3.9.5 Darwin/19.6.0 OSX/10.15.7
                UID:GID : 502:20
             netrc file : None
           offline mode : False


An unexpected error has occurred. Conda has prepared the above report.

If submitted, this report will be used by core maintainers to improve
future releases of conda.
Would you like conda to send this report to the core maintainers?

[y/N]: y
Upload did not complete.

Thank you for helping to improve conda.
Opt-in to always sending reports (and not see this message again)
by running

    $ conda config --set report_errors true
```

{{</fold>}}

## It all began with…

[`conda update -n base conda` doesn't update · Issue #6941 · conda/conda](https://github.com/conda/conda/issues/6941#issuecomment-858822577)

> <cite>**[loikein](https://github.com/loikein)** commented [2021-06-10T17:34:17Z](https://github.com/conda/conda/issues/6941#issuecomment-858822577)</cite>:
> 
> Any news on this issue?
> 
> Same problem here when trying to update from 4.8.4. I do automated regular upgrades on all the environments and packages on my computer, and thus did not even notice that it was not updating for a long while…
> 
> {{<fold "`$ conda update -n base conda`">}}

```bash
$ conda update -n base conda --yes
Collecting package metadata (current_repodata.json): done
Solving environment: /

==> WARNING: A newer version of conda exists. <==
  current version: 4.8.4
  latest version: 4.10.1

Please update conda by running

    $ conda update -n base conda



# All requested packages already installed.
```

???

{{</fold>}}

## The meat part

I saw this question and think, oh, the answers look about right.

[python - conda update -n base -c defaults conda won't update to 4.6.x - Stack Overflow](https://stackoverflow.com/questions/54811831/conda-update-n-base-c-defaults-conda-wont-update-to-4-6-x)

Off we go…

{{<fold "`$ conda update python`">}}

```bash
Collecting package metadata (current_repodata.json): done
Solving environment: |
The environment is inconsistent, please check the package plan carefully
The following packages are causing the inconsistency:

  - conda-forge/noarch::requests==2.24.0=pyh9f0ad1d_0
  - conda-forge/noarch::idna==2.10=pyh9f0ad1d_0
  - conda-forge/osx-64::chardet==3.0.4=py37hc8dfbb8_1006
  - conda-forge/osx-64::numpy==1.19.1=py37h7e69742_0
  - conda-forge/osx-64::kiwisolver==1.2.0=py37ha1cc60f_0
  - conda-forge/noarch::olefile==0.46=py_0
  - conda-forge/noarch::pip==20.2.2=py_0
  - conda-forge/noarch::tqdm==4.48.2=pyh9f0ad1d_0
  - conda-forge/noarch::pycparser==2.20=pyh9f0ad1d_2
  - conda-forge/osx-64::conda==4.8.4=py37hc8dfbb8_2
  - conda-forge/osx-64::scipy==1.5.2=py37h2702c91_0
  - conda-forge/osx-64::seaborn==0.10.1=1
  - conda-forge/osx-64::pysocks==1.7.1=py37hc8dfbb8_1
  - conda-forge/noarch::urllib3==1.25.10=py_0
  - conda-forge/osx-64::brotlipy==0.7.0=py37h9bfed18_1000
  - conda-forge/osx-64::statsmodels==0.11.1=py37h9bfed18_2
  - conda-forge/osx-64::python.app==1.3=py37h9bfed18_1
  - conda-forge/osx-64::pandas==1.1.0=py37hdadc0f0_0
  - conda-forge/osx-64::sqlite==3.32.3=h93121df_1
  - conda-forge/osx-64::matplotlib-base==3.3.0=py37h886f89f_1
  - conda-forge/noarch::pyparsing==2.4.7=pyh9f0ad1d_0
  - conda-forge/noarch::pyopenssl==19.1.0=py_1
  - conda-forge/osx-64::setuptools==49.3.1=py37hc8dfbb8_0
  - conda-forge/noarch::pytz==2020.1=pyh9f0ad1d_0
  - conda-forge/osx-64::pycosat==0.6.3=py37h9bfed18_1004
  - conda-forge/osx-64::cffi==1.14.1=py37hf5b7abd_0
  - conda-forge/osx-64::pillow==7.2.0=py37hfd78ece_1
  - conda-forge/osx-64::python_abi==3.7=1_cp37m
  - conda-forge/osx-64::certifi==2020.6.20=py37hc8dfbb8_0
  - conda-forge/noarch::cycler==0.10.0=py_2
  - conda-forge/noarch::wheel==0.34.2=py_1
  - conda-forge/noarch::patsy==0.5.1=py_0
  - conda-forge/osx-64::ruamel_yaml==0.15.80=py37h9bfed18_1001
  - conda-forge/osx-64::tornado==6.0.4=py37h9bfed18_1
  - conda-forge/osx-64::python==3.7.6=cpython_h1fd5dd1_6
  - conda-forge/noarch::python-dateutil==2.8.1=py_0
  - conda-forge/noarch::six==1.15.0=pyh9f0ad1d_0
  - conda-forge/noarch::seaborn-base==0.10.1=py_1
  - conda-forge/osx-64::conda-package-handling==1.6.0=py37h9bfed18_2
  - conda-forge/osx-64::cryptography==3.0=py37h94e4008_0
done

## Package Plan ##

  environment location: /opt/miniconda3

  added / updated specs:
    - python


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    certifi-2021.5.30          |   py39h6e9494a_0         141 KB  conda-forge
    conda-4.10.1               |   py39h6e9494a_0         3.0 MB  conda-forge
    libblas-3.9.0              |       9_openblas          11 KB  conda-forge
    libcblas-3.9.0             |       9_openblas          11 KB  conda-forge
    libgfortran-5.0.0          |9_3_0_h6c81a4c_22          19 KB  conda-forge
    libgfortran5-9.3.0         |      h6c81a4c_22         1.7 MB  conda-forge
    liblapack-3.9.0            |       9_openblas          11 KB  conda-forge
    libopenblas-0.3.15         |openmp_h5e1b9a4_1         8.7 MB  conda-forge
    olefile-0.46               |             py_0          31 KB  conda-forge
    openjpeg-2.4.0             |       h6e7aa92_1         374 KB  conda-forge
    pyopenssl-19.1.0           |             py_1          47 KB  conda-forge
    python-3.9.5               |       h88f2d9e_3         9.9 MB
    python.app-3               |   py39h9ed2024_0          20 KB
    urllib3-1.25.10            |             py_0          92 KB  conda-forge
    ------------------------------------------------------------
                                           Total:        24.1 MB

The following NEW packages will be INSTALLED:

  libgfortran5       conda-forge/osx-64::libgfortran5-9.3.0-h6c81a4c_22
  openjpeg           conda-forge/osx-64::openjpeg-2.4.0-h6e7aa92_1
  tzdata             conda-forge/noarch::tzdata-2021a-he74cb21_0

The following packages will be UPDATED:

  certifi                          2020.6.20-py37hc8dfbb8_0 --> 2021.5.30-py39h6e9494a_0
  conda                                4.8.4-py37hc8dfbb8_2 --> 4.10.1-py39h6e9494a_0
  libblas                                 3.8.0-17_openblas --> 3.9.0-9_openblas
  libcblas                                3.8.0-17_openblas --> 3.9.0-9_openblas
  libffi                                3.2.1-hb1e8313_1007 --> 3.3-h046ec9c_2
  libgfortran                       4.0.0-7_5_0_h1a10cd1_22 --> 5.0.0-9_3_0_h6c81a4c_22
  liblapack                               3.8.0-17_openblas --> 3.9.0-9_openblas
  libopenblas                      0.3.10-openmp_h63d9170_4 --> 0.3.15-openmp_h5e1b9a4_1
  python             conda-forge::python-3.7.6-cpython_h1f~ --> pkgs/main::python-3.9.5-h88f2d9e_3
  python.app         conda-forge::python.app-1.3-py37h9bfe~ --> pkgs/main::python.app-3-py39h9ed2024_0


Proceed ([y]/n)? y


Downloading and Extracting Packages
olefile-0.46         | 31 KB     | ####################################################################################### | 100%
libgfortran-5.0.0    | 19 KB     | ####################################################################################### | 100%
libgfortran5-9.3.0   | 1.7 MB    | ####################################################################################### | 100%
openjpeg-2.4.0       | 374 KB    | ####################################################################################### | 100%
liblapack-3.9.0      | 11 KB     | ####################################################################################### | 100%
python-3.9.5         | 9.9 MB    | ####################################################################################### | 100%
libopenblas-0.3.15   | 8.7 MB    | ####################################################################################### | 100%
python.app-3         | 20 KB     | ####################################################################################### | 100%
urllib3-1.25.10      | 92 KB     | ####################################################################################### | 100%
conda-4.10.1         | 3.0 MB    | ####################################################################################### | 100%
libblas-3.9.0        | 11 KB     | ####################################################################################### | 100%
pyopenssl-19.1.0     | 47 KB     | ####################################################################################### | 100%
certifi-2021.5.30    | 141 KB    | ####################################################################################### | 100%
libcblas-3.9.0       | 11 KB     | ####################################################################################### | 100%
Preparing transaction: done
Verifying transaction: done
Executing transaction: done
Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 19, in get_yaml
    import ruamel_yaml as yaml
ModuleNotFoundError: No module named 'ruamel_yaml'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 22, in get_yaml
    import ruamel.yaml as yaml
ModuleNotFoundError: No module named 'ruamel'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main.py", line 139, in main
    from ..activate import main as activator_main
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/activate.py", line 22, in <module>
    from .base.context import ROOT_ENV_NAME, context, locate_prefix_by_name
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/base/context.py", line 29, in <module>
    from ..common.configuration import (Configuration, ConfigurationLoadError, MapParameter,
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/configuration.py", line 37, in <module>
    from .serialize import yaml_round_trip_load
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 30, in <module>
    yaml = get_yaml()
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/_vendor/auxlib/decorators.py", line 59, in _memoized_func
    result = func(*args, **kwargs)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 24, in get_yaml
    raise ImportError("No yaml library available.\n"
ImportError: No yaml library available.
To proceed, conda install ruamel_yaml

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 19, in get_yaml
    import ruamel_yaml as yaml
ModuleNotFoundError: No module named 'ruamel_yaml'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 22, in get_yaml
    import ruamel.yaml as yaml
ModuleNotFoundError: No module named 'ruamel'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/bin/conda", line 13, in <module>
    sys.exit(main())
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main.py", line 149, in main
    return ExceptionHandler().handle_exception(exc_val, exc_tb)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1126, in handle_exception
    return self.handle_unexpected_exception(exc_val, exc_tb)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1137, in handle_unexpected_exception
    self.print_unexpected_error_report(error_report)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1192, in print_unexpected_error_report
    from .base.context import context
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/base/context.py", line 29, in <module>
    from ..common.configuration import (Configuration, ConfigurationLoadError, MapParameter,
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/configuration.py", line 37, in <module>
    from .serialize import yaml_round_trip_load
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 30, in <module>
    yaml = get_yaml()
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/_vendor/auxlib/decorators.py", line 59, in _memoized_func
    result = func(*args, **kwargs)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 24, in get_yaml
    raise ImportError("No yaml library available.\n"
ImportError: No yaml library available.
To proceed, conda install ruamel_yaml
```

{{</fold>}}

{{<fold "`$ conda install ruamel_yaml`">}}

```bash
Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 19, in get_yaml
    import ruamel_yaml as yaml
ModuleNotFoundError: No module named 'ruamel_yaml'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 22, in get_yaml
    import ruamel.yaml as yaml
ModuleNotFoundError: No module named 'ruamel'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1079, in __call__
    return func(*args, **kwargs)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main.py", line 74, in _main
    from ..base.context import context
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/base/context.py", line 29, in <module>
    from ..common.configuration import (Configuration, ConfigurationLoadError, MapParameter,
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/configuration.py", line 37, in <module>
    from .serialize import yaml_round_trip_load
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 30, in <module>
    yaml = get_yaml()
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/_vendor/auxlib/decorators.py", line 59, in _memoized_func
    result = func(*args, **kwargs)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 24, in get_yaml
    raise ImportError("No yaml library available.\n"
ImportError: No yaml library available.
To proceed, conda install ruamel_yaml

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 19, in get_yaml
    import ruamel_yaml as yaml
ModuleNotFoundError: No module named 'ruamel_yaml'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 22, in get_yaml
    import ruamel.yaml as yaml
ModuleNotFoundError: No module named 'ruamel'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/opt/miniconda3/bin/conda", line 13, in <module>
    sys.exit(main())
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main.py", line 152, in main
    return conda_exception_handler(_main, *args, **kwargs)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1371, in conda_exception_handler
    return_value = exception_handler(func, *args, **kwargs)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1082, in __call__
    return self.handle_exception(exc_val, exc_tb)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1126, in handle_exception
    return self.handle_unexpected_exception(exc_val, exc_tb)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1137, in handle_unexpected_exception
    self.print_unexpected_error_report(error_report)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1192, in print_unexpected_error_report
    from .base.context import context
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/base/context.py", line 29, in <module>
    from ..common.configuration import (Configuration, ConfigurationLoadError, MapParameter,
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/configuration.py", line 37, in <module>
    from .serialize import yaml_round_trip_load
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 30, in <module>
    yaml = get_yaml()
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/_vendor/auxlib/decorators.py", line 59, in _memoized_func
    result = func(*args, **kwargs)
  File "/opt/miniconda3/lib/python3.9/site-packages/conda/common/serialize.py", line 24, in get_yaml
    raise ImportError("No yaml library available.\n"
ImportError: No yaml library available.
To proceed, conda install ruamel_yaml
```

{{</fold>}}

Turns out this ruamel thing is quite a drama on its own, but no, I will not go down this particular rabbit hole at this point: [ModuleNotFoundError: No module named 'ruamel' · Issue #106 · fair-workflows/nanopub](https://github.com/fair-workflows/nanopub/issues/106)

At this point, I almost gave up but saw this:

```bash
$ which pip
/opt/miniconda3/bin/pip
$ which python
/opt/miniconda3/bin/python
$ python --version
Python 3.9.5
$ conda --version
conda 4.10.1
```

Shit, might as well give pip a try. (Reference: [ModuleNotFoundError: No module named 'ruamel' - AMSET - Materials Science Community Discourse](https://matsci.org/t/modulenotfounderror-no-module-named-ruamel/36183/4))

{{<fold "`$ pip install ruamel.yaml`">}}

```bash
Collecting ruamel.yaml
  Downloading ruamel.yaml-0.17.9-py3-none-any.whl (108 kB)
     |████████████████████████████████| 108 kB 5.1 MB/s
Collecting ruamel.yaml.clib>=0.1.2; platform_python_implementation == "CPython" and python_version < "3.10"
  Downloading ruamel.yaml.clib-0.2.2-cp39-cp39-macosx_10_9_x86_64.whl (156 kB)
     |████████████████████████████████| 156 kB 5.6 MB/s
Installing collected packages: ruamel.yaml.clib, ruamel.yaml
Successfully installed ruamel.yaml-0.17.9 ruamel.yaml.clib-0.2.2
```

{{</fold>}}

And try again…

{{<fold "`$ conda install ruamel_yaml`">}}

```bash
# >>>>>>>>>>>>>>>>>>>>>> ERROR REPORT <<<<<<<<<<<<<<<<<<<<<<

    Traceback (most recent call last):
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1079, in __call__
        return func(*args, **kwargs)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main.py", line 84, in _main
        exit_code = do_call(args, p)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/conda_argparse.py", line 83, in do_call
        return getattr(module, func_name)(args, parser)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main_install.py", line 20, in execute
        install(args, parser, 'install')
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/install.py", line 116, in install
        if context.use_only_tar_bz2:
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/base/context.py", line 734, in use_only_tar_bz2
        import conda_package_handling.api
    ModuleNotFoundError: No module named 'conda_package_handling'
```

{{</fold>}}

…well, what about…

{{<fold "$ conda install conda_package_handling">}}

```bash
# >>>>>>>>>>>>>>>>>>>>>> ERROR REPORT <<<<<<<<<<<<<<<<<<<<<<

    Traceback (most recent call last):
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1079, in __call__
        return func(*args, **kwargs)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main.py", line 84, in _main
        exit_code = do_call(args, p)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/conda_argparse.py", line 83, in do_call
        return getattr(module, func_name)(args, parser)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main_install.py", line 20, in execute
        install(args, parser, 'install')
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/install.py", line 116, in install
        if context.use_only_tar_bz2:
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/base/context.py", line 734, in use_only_tar_bz2
        import conda_package_handling.api
    ModuleNotFoundError: No module named 'conda_package_handling'
```

{{</fold>}}

or…

{{<fold "`$ conda update -n base`">}}

```bash
# >>>>>>>>>>>>>>>>>>>>>> ERROR REPORT <<<<<<<<<<<<<<<<<<<<<<

    Traceback (most recent call last):
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/exceptions.py", line 1079, in __call__
        return func(*args, **kwargs)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main.py", line 84, in _main
        exit_code = do_call(args, p)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/conda_argparse.py", line 83, in do_call
        return getattr(module, func_name)(args, parser)
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/main_update.py", line 20, in execute
        install(args, parser, 'update')
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/cli/install.py", line 116, in install
        if context.use_only_tar_bz2:
      File "/opt/miniconda3/lib/python3.9/site-packages/conda/base/context.py", line 734, in use_only_tar_bz2
        import conda_package_handling.api
    ModuleNotFoundError: No module named 'conda_package_handling'
```

{{</fold>}}

Shit.

## Have you heard of the good news of copy-and-paste?

I almost did [how to reinstall miniconda - Google Search](https://www.google.com/search?q=how+to+reinstall+miniconda&nfpr=1), but then found this Samaritan who opened an issue and actually solved it afterwords: [Conda is broken after update. No module named `conda_package_handling` · Issue #8920 · conda/conda](https://github.com/conda/conda/issues/8920#issuecomment-510951862)

> <cite>**[sbushmanov](https://github.com/sbushmanov)** commented [2019-07-12T16:35:32Z](https://github.com/conda/conda/issues/8920#issuecomment-510951862)</cite>:
>
> After I copied old version of `conda_package_handling` from another machine and do `conda install conda-package-handling` conda became functional again, including `conda update --all` to correct for conflicting packages.

And, thank Archons, there are two folders called `conda_package_handling` and `conda_package_handling-1.6.0.dist-info` under `/opt/miniconda3/lib/python3.7/site-packages/conda/`. I copied them to `/opt/miniconda3/lib/python3.9/site-packages/conda/`, and…

```bash
$ conda install conda-package-handling
Collecting package metadata (repodata.json): done
Solving environment: | WARNING conda.resolve:_get_sat_solver_cls(57): Could not run SAT solver through interface 'pycosat'.
failed with initial frozen solve. Retrying with flexible solve.

CondaDependencyError: Cannot run solver. No functioning SAT implementations available.
```

Tried the find, copy & paste for this `pycosat`, but nothing changes. At this point I'm just so done with it.

## Pip, my superman

You thought that was the end? No, I still have one last `$ pip install pycosat --force-reinstall` up my sleeve.

{{<fold "First try…">}}

```bash
Collecting pycosat
  Downloading pycosat-0.6.3.zip (66 kB)
     |████████████████████████████████| 66 kB 4.2 MB/s
    ERROR: Command errored out with exit status 1:
     command: /opt/miniconda3/bin/python3.9 -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-gqudjxke/pycosat/setup.py'"'"'; __file__='"'"'/private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-gqudjxke/pycosat/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-pip-egg-info-hodcfrgl
         cwd: /private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-gqudjxke/pycosat/
    Complete output (3 lines):
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
    ModuleNotFoundError: No module named 'setuptools'
    ----------------------------------------
ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.
```

{{</fold>}}

(…find-copy-paste…)

{{<fold "Second try…">}}

```bash
Collecting pycosat
  Using cached pycosat-0.6.3.zip (66 kB)
    ERROR: Command errored out with exit status 1:
     command: /opt/miniconda3/bin/python3.9 -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-5u4hi3jp/pycosat/setup.py'"'"'; __file__='"'"'/private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-5u4hi3jp/pycosat/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-pip-egg-info-bhrehjnm
         cwd: /private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-5u4hi3jp/pycosat/
    Complete output (5 lines):
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
      File "/opt/miniconda3/lib/python3.9/site-packages/setuptools/__init__.py", line 8, in <module>
        import _distutils_hack.override  # noqa: F401
    ModuleNotFoundError: No module named '_distutils_hack'
    ----------------------------------------
ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.
```

{{</fold>}}

(…find-copy-paste…)

{{<fold "Third try…">}}

```bash
Collecting pycosat
  Using cached pycosat-0.6.3.zip (66 kB)
    ERROR: Command errored out with exit status 1:
     command: /opt/miniconda3/bin/python3.9 -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-whln8cm1/pycosat/setup.py'"'"'; __file__='"'"'/private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-whln8cm1/pycosat/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-pip-egg-info-r6zrlb0u
         cwd: /private/var/folders/c2/2fxscjk958993tlvdbw2fxt80000gp/T/pip-install-whln8cm1/pycosat/
    Complete output (7 lines):
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
      File "/opt/miniconda3/lib/python3.9/site-packages/setuptools/__init__.py", line 19, in <module>
        import setuptools.version
      File "/opt/miniconda3/lib/python3.9/site-packages/setuptools/version.py", line 1, in <module>
        import pkg_resources
    ModuleNotFoundError: No module named 'pkg_resources'
    ----------------------------------------
ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.
```

{{</fold>}}

(…find-copy-paste…)

{{<fold "Forth try…">}}

```bash
Collecting pycosat
  Using cached pycosat-0.6.3.zip (66 kB)
Building wheels for collected packages: pycosat
  Building wheel for pycosat (setup.py) ... done
  Created wheel for pycosat: filename=pycosat-0.6.3-cp39-cp39-macosx_10_9_x86_64.whl size=57667 sha256=3a4f96d9a02ca9076f358a6868443ef85be7cdc700e54834c4ae67e61ba6d802
  Stored in directory: /Users/loikein/Library/Caches/pip/wheels/8c/c4/34/9ccbaac74c64deb727e916d00905158b6941b006bc829fa7fe
Successfully built pycosat
Installing collected packages: pycosat
  Attempting uninstall: pycosat
    Found existing installation: pycosat 0.6.3
    Uninstalling pycosat-0.6.3:
      Successfully uninstalled pycosat-0.6.3
ERROR: After October 2020 you may experience errors when installing or updating packages. This is because pip will change the way that it resolves dependency conflicts.

We recommend you use --use-feature=2020-resolver to test your packages with the new resolver before it becomes the default.

conda 4.10.1 requires ruamel_yaml_conda>=0.11.14, which is not installed.
Successfully installed pycosat-0.6.3
```

{{</fold>}}

Oh. My. Word. And indeed…

{{<fold "`$ conda update conda`">}}

```bash
Collecting package metadata (repodata.json): done
Solving environment: \
The environment is inconsistent, please check the package plan carefully
The following packages are causing the inconsistency:

............
done

## Package Plan ##

  environment location: /opt/miniconda3

  added / updated specs:
    - conda


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    libblas-3.9.0              |       8_openblas          11 KB  conda-forge
    libcblas-3.9.0             |       8_openblas          11 KB  conda-forge
    libgfortran-4.0.0          |7_5_0_h1a10cd1_22          19 KB  conda-forge
    liblapack-3.9.0            |       8_openblas          11 KB  conda-forge
    libopenblas-0.3.12         |openmp_h63d9170_1         8.7 MB  conda-forge
    ------------------------------------------------------------
                                           Total:         8.7 MB

The following packages will be UPDATED:

  sqlite                                  3.32.3-h93121df_1 --> 3.35.5-h44b9ce1_0

The following packages will be DOWNGRADED:

  libblas                                  3.9.0-9_openblas --> 3.9.0-8_openblas
  libcblas                                 3.9.0-9_openblas --> 3.9.0-8_openblas
  libgfortran                       5.0.0-9_3_0_h6c81a4c_22 --> 4.0.0-7_5_0_h1a10cd1_22
  liblapack                                3.9.0-9_openblas --> 3.9.0-8_openblas
  libopenblas                      0.3.15-openmp_h5e1b9a4_1 --> 0.3.12-openmp_h63d9170_1


Proceed ([y]/n)? y
```

{{</fold>}}

Voilà!

<!-- 
Viola, I'm checking out. (That was a joke on vola, but no, not fun at all.)
 -->

And of course, `$ conda update --all` after this. All it actually did was  downgrading five packages, which I found peculiar, but hey, would I ever be surprised at Python for anything after today? Probably not.

## Side note: conda revision

Reference: [conda update后出现的问题及conda回滚，回到历史版本_生如的博客-CSDN博客](https://blog.csdn.net/qq_17130909/article/details/100534234)

What a handy function, maybe someone has experienced precisely what I did and invented this.

{{<fold "`$ conda list --revision`">}}

```bash
2020-03-09 12:32:13  (rev 0)
    +asn1crypto-1.3.0
    +ca-certificates-2020.1.1
    +certifi-2019.11.28
    +cffi-1.14.0
    +chardet-3.0.4
    +conda-4.8.2
    +conda-package-handling-1.6.0
    +cryptography-2.8
    +idna-2.8
    +libcxx-4.0.1
    +libcxxabi-4.0.1
    +libedit-3.1.20181209
    +libffi-3.2.1
    +ncurses-6.2
    +openssl-1.1.1d
    +pip-20.0.2
    +pycosat-0.6.3
    +pycparser-2.19
    +pyopenssl-19.1.0
    +pysocks-1.7.1
    +python-3.7.6
    +python.app-2
    +readline-7.0
    +requests-2.22.0
    +ruamel_yaml-0.15.87
    +setuptools-45.2.0
    +six-1.14.0
    +sqlite-3.31.1
    +tk-8.6.8
    +tqdm-4.42.1
    +urllib3-1.25.8
    +wheel-0.34.2
    +xz-5.2.4
    +yaml-0.1.7
    +zlib-1.2.11

............

2021-06-10 19:28:33  (rev 37)
     freetype  {2.10.4 (defaults/osx-64) -> 2.10.4 (conda-forge/osx-64)}
     jbig  {2.1 (defaults/osx-64) -> 2.1 (conda-forge/osx-64)}
     lcms2  {2.12 (defaults/osx-64) -> 2.12 (conda-forge/osx-64)}
     lerc  {2.2.1 (defaults/osx-64) -> 2.2.1 (conda-forge/osx-64)}
     libdeflate  {1.7 (defaults/osx-64) -> 1.7 (conda-forge/osx-64)}
     libffi  {3.2.1 (defaults/osx-64) -> 3.2.1 (conda-forge/osx-64)}
     libpng  {1.6.37 (defaults/osx-64) -> 1.6.37 (conda-forge/osx-64)}
     libwebp-base  {1.2.0 (defaults/osx-64) -> 1.2.0 (conda-forge/osx-64)}
     lz4-c  {1.9.3 (defaults/osx-64) -> 1.9.3 (conda-forge/osx-64)}
     ncurses  {6.2 (defaults/osx-64) -> 6.2 (conda-forge/osx-64)}
     openssl  {1.1.1k (defaults/osx-64) -> 1.1.1k (conda-forge/osx-64)}
     readline  {8.1 (defaults/osx-64) -> 8.1 (conda-forge/osx-64)}
     tk  {8.6.10 (defaults/osx-64) -> 8.6.10 (conda-forge/osx-64)}
     xz  {5.2.5 (defaults/osx-64) -> 5.2.5 (conda-forge/osx-64)}
     yaml  {0.2.5 (defaults/osx-64) -> 0.2.5 (conda-forge/osx-64)}
     zlib  {1.2.11 (defaults/osx-64) -> 1.2.11 (conda-forge/osx-64)}

2021-06-10 19:35:15  (rev 38)
     certifi  {2020.6.20 (conda-forge/osx-64) -> 2021.5.30 (conda-forge/osx-64)}
     conda  {4.8.4 (conda-forge/osx-64) -> 4.10.1 (conda-forge/osx-64)}
     libblas  {3.8.0 (conda-forge/osx-64) -> 3.9.0 (conda-forge/osx-64)}
     libcblas  {3.8.0 (conda-forge/osx-64) -> 3.9.0 (conda-forge/osx-64)}
     libffi  {3.2.1 (conda-forge/osx-64) -> 3.3 (conda-forge/osx-64)}
     libgfortran  {4.0.0 (conda-forge/osx-64) -> 5.0.0 (conda-forge/osx-64)}
     liblapack  {3.8.0 (conda-forge/osx-64) -> 3.9.0 (conda-forge/osx-64)}
     libopenblas  {0.3.10 (conda-forge/osx-64) -> 0.3.15 (conda-forge/osx-64)}
     python  {3.7.6 (conda-forge/osx-64) -> 3.9.5 (defaults/osx-64)}
     python.app  {1.3 (conda-forge/osx-64) -> 3 (defaults/osx-64)}
    +libgfortran5-9.3.0 (conda-forge/osx-64)
    +openjpeg-2.4.0 (conda-forge/osx-64)
    +tzdata-2021a (conda-forge/noarch)
```

{{</fold>}}

So in theory, I will then just have to do `$ conda install --revision 37` to revert to the previous working version of conda. Good to know.

## Closing thoughts

Everything I have to go through to day, and gone through by many across the Internet, is all very confusing and disappointing.

{{< twitter 1403007699504091141 >}}

Given also how slow conda devs on GitHub response to their issues (you can do sort by most commented and [see for yourself](https://github.com/conda/conda/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc) how many of these issues' comment sections are just users helping each other without any useful actions or even a thank-you from the devs), I guess the lesson here is don't use conda.

Or better yet, don't use Python. Actually, you know what, don't ever get into this programming business, if you are not mentally ready to sit down and debug a single environment line for two hour and a half just like I did.
