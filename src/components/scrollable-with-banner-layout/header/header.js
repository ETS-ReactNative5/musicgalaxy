import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FadeInUp,
  FadeInDown,
} from "react-native-reanimated";

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { useDispatch, useSelector } from 'react-redux';
import Animated from 'react-native-reanimated';

import { filterIconSvg, searchIconSvg } from '@src/utils/constants';
import { scale } from '@src/utils/media';
import { getGenres, getYears } from '@src/redux/selector';
import { clearFilters, setFilterQuery, setSearchQuery } from '@src/redux/actions';

import {
  StyledWrapper,
  FilterIcon,
  SearchIconInput,
  Title,
  SearchIcon,
  LeftIconWrapper,
  StyledTextInput
} from './styled';
import { APP_COLORS } from '@src/theme/colors';


export const LayoutHeader =
  ({
    title,
    headerTitleStyles,
    showBackButton,
  }) => {

    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItemsObject, setSelectedItemsObject] = useState([]);
    const [searchResults, setSearchResults] = useState('');
    const [showInput, setShowInput] = useState(false);

    const ref = React.useRef(null);
    const genres = useSelector(getGenres);
    const years = useSelector(getYears);

    const yearsList = years.sort().map((item, index) => ({ name: item, id: index, type: 'year' }))
    const genreList = genres.map((genre) => ({ ...genre, type: 'genre' }))


    const onSelectedItemsChange = (selectedItems) => {
      setSelectedItems(selectedItems)
    };

    const onSelectedItemObjectsChange = (selectedItems) => {
      setSelectedItemsObject(selectedItems)
    };

    const onPressSearch = () => {
      setShowInput(true)
    }

    const items = [
      {
        name: 'Genres',
        id: 0,
        children: genreList
      },
      {
        name: 'Release year',
        id: 1,
        children: yearsList
      }
    ];

    const selectedGenreIds = selectedItemsObject.filter((obj) => obj.type == 'genre').map((item) => item.id);
    const filteredYear = selectedItemsObject.filter((obj) => obj.type == 'year').map((item) => item.name);

    const onEndEditing = (text) => {
      dispatch(setSearchQuery(text))
    }

    const onConfirm = () => {
      dispatch(setFilterQuery({ genres: selectedGenreIds, years: filteredYear }));
    }

    const onCancel = () => {
      ref && ref.current && ref.current._removeAllItems();
      ref && ref.current && ref.current._toggleSelector();
      dispatch(clearFilters());
    }

    useEffect(() => {
      if (searchResults?.length == 0) {
        dispatch(setSearchQuery(''))
      }
    }, [searchResults])


    return (
      <StyledWrapper insets={insets} style={headerTitleStyles}>

        {
          !showInput ? (
            <>
              <Title showBackButton={showBackButton} >
                {title}
              </Title>
              <TouchableOpacity
                style={{ zIndex: 11 }}
                onPress={onPressSearch}
              >
                <SearchIcon
                  fill={'black'}
                  xml={searchIconSvg}
                />
              </TouchableOpacity>
            </>
          ) :
            (
              <Animated.View
                entering={FadeInUp}
                exiting={FadeInDown}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <StyledTextInput
                  onChangeText={setSearchResults}
                  value={searchResults}
                  placeholder="Search by Artist or Song Title..."
                  leftIconPadding={scale(40)}
                  returnKeyType='search'
                  onSubmitEditing={({ nativeEvent }) => onEndEditing(nativeEvent.text)}
                  LeftIcon={
                    <LeftIconWrapper>
                      <SearchIconInput fill={'red'} size={scale(10)} xml={searchIconSvg} />
                    </LeftIconWrapper>
                  }
                />
                <TouchableOpacity onPress={() => ref && ref.current && ref.current._toggleSelector()} >
                  <FilterIcon
                    fill={'red'}
                    xml={filterIconSvg}
                  />
                </TouchableOpacity>

                {
                  selectedItemsObject.length > 0 && (
                    <View style={{ backgroundColor: APP_COLORS.black , paddingHorizontal: scale(5), borderRadius: scale(5), position: 'absolute', right: -scale(15), top: -scale
                    (8) }} >
                      <Text style={{ color: 'white' }} >{selectedItemsObject.length}</Text>
                    </View>
                  )
                }
              </Animated.View>
            )
        }
        <SectionedMultiSelect
          ref={ref}
          items={items}
          styles={{
            container: {
              marginVertical: 50,
            },
            listContainer: {
              backgroundColor: 'black'
            }
          }}
          hideSelect
          IconRenderer={Icon}
          uniqueKey="id"
          showCancelButton
          subKey="children"
          onConfirm={onConfirm}
          alwaysShowSelectText
          showDropDowns={true}
          showChips={false}
          onCancel={onCancel}
          readOnlyHeadings={true}
          onSelectedItemsChange={onSelectedItemsChange}
          onSelectedItemObjectsChange={onSelectedItemObjectsChange}
          selectedItems={selectedItems}
        />

      </StyledWrapper>

    );
  };

