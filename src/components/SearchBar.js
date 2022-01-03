import React, { useState, useEffect, useCallback, useRef } from 'react';
import Autosuggest from 'react-autosuggest';
import { searchDapps } from "../services/dappsService";
import { capitalizeString, typeToCoolText } from '../helpers/formatHelper';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searching, setSearching] = useState(false);
  const controllerRef = useRef();

  const onChange = (event, { newValue }) => {
    setSearching(true);
    setValue(newValue);
  };

  const getSuggestions = useCallback(async () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
    const data = await searchDapps(value, controllerRef.current?.signal);
    try {
      if (data?.dapps?.length || data?.nfts?.length) {
        return data;
      }
      controllerRef.current = null;
    } catch (e) {
      console.log(e);
    }
    return { data: [], nfts: [] };
  }, [value]);

  useEffect(async () => {
    setSuggestions(await getSuggestions());
    setSearching(false);
  }, [value])

  const clearSuggestions = () => {
    app.hideSearchDropdown();
    setValue('');
    setTimeout(() => {
      setSuggestions([]);
    }, 200);
  };

  const renderInputComponent = inputProps => (
    <div className="interactive-input light">
      <input {...inputProps} type="text" id="search-main" name="search_main" placeholder="Search here for NFT games & Experiences..." />
      <div className="interactive-input-icon-wrap">
        <svg className="interactive-input-icon icon-magnifying-glass light-icon">
          <use xlinkHref="#svg-magnifying-glass"></use>
        </svg>
      </div>

      <div className="interactive-input-action" onClick={() => clearSuggestions()}>
        <svg className="interactive-input-action-icon icon-cross-thin">
          <use xlinkHref="#svg-cross-thin"></use>
        </svg>
      </div>
    </div>
  );

  const renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
      <div {...containerProps} className="dropdown-box header-search-dropdown" style={{ paddingBottom: 0 }}>
        <div className="dropdown-box-list small no-scroll">
          {!searching && suggestions?.dapps?.length ? (
            <>
              <div className="dropdown-box-category">
                <p className="dropdown-box-category-title">Experiences</p>
              </div>
              {suggestions?.dapps.map(dapp => (
                <>
                  <a className="dropdown-box-list-item" href={`/game/${dapp.id}`} key={dapp.id}>
                    <div className="user-status no-padding-top">
                      <div className="user-status-avatar">
                        <figure className="picture small round liquid m-0">
                          <img src={dapp.featuredImage} className="object-cover rounded-lg" alt="item-07" />
                        </figure>
                      </div>
                      <p className="user-status-title"><span className="bold">{dapp.title}</span></p>
                      <p className="user-status-text">{capitalizeString(typeToCoolText(dapp.type))}</p>

                      <div className="user-status-icon">
                        <svg className="icon-marketplace">
                          <use xlinkHref="#svg-quests"></use>
                        </svg>
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </>
          ): (
            <>
              {searching && (
                <div className="dropdown-box-list-item">
                  <p className="user-status-title"><span className="bold">Searching...</span></p>
                </div>
              )}
              {!searching && (
                <div className="dropdown-box-list-item">
                  <p className="user-status-title"><span className="bold">No results.</span></p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={() => {}}
      onSuggestionsClearRequested={clearSuggestions}
      inputProps={{
        value,
        onChange,
      }}
      renderInputComponent={renderInputComponent}
      renderSuggestionsContainer={renderSuggestionsContainer}
      containerProps={{
        className: 'header-actions search-bar'
      }}
    />
  )
}

export default SearchBar;
